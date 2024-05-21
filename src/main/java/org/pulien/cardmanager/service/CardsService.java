package org.pulien.cardmanager.service;

import lombok.NoArgsConstructor;
import lombok.NonNull;
import org.pulien.cardmanager.entity.Card;
import org.pulien.cardmanager.models.dtos.CardDTO;
import org.pulien.cardmanager.models.enums.EnumConverters;
import org.pulien.cardmanager.repository.card.CardsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicReference;

@Service
@NoArgsConstructor
public class CardsService {
    @Autowired
    private CardsRepository cardsRepository;

    @Autowired
    private EnumConverters<String> converter;

    public ResponseEntity<List<Card>> getCards() {
        return ResponseEntity.ok(cardsRepository.findAll());
    }

    public ResponseEntity<Card> getCardById(@NonNull @PathVariable Long id) {

        Optional<Card> card = cardsRepository.findById(id);

        return card.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    public ResponseEntity<List<Card>> getCardFilteredByPrice(@PathVariable int mini, @PathVariable int max) {
        Optional<List<Card>> filteredCards = cardsRepository.findAllByPriceIsBetween(mini, max);

        return filteredCards.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    public ResponseEntity<List<Card>> getCardsCheaperThan(@PathVariable int max) {
        Optional<List<Card>> filteredCards = cardsRepository.findAllByPriceIsLessThanEqual(max);

        return filteredCards.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    public ResponseEntity<List<Card>> getCardsMoreExpensiveThan(@PathVariable int mini) {
        Optional<List<Card>> filteredCards = cardsRepository.findAllByPriceIsGreaterThanEqual(mini);

        return filteredCards.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    public ResponseEntity<List<Card>> getCardsMoreExpensiveThan(@PathVariable String rarity) {
        Optional<List<Card>> filteredCards = cardsRepository.findAllByRarity(converter.convertRarity(rarity));

        return filteredCards.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    public ResponseEntity<List<Card>> getCardFromName(@PathVariable String name) {
        Optional<List<Card>> filteredCards = cardsRepository.findAllByName(name);

        return filteredCards.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    public ResponseEntity<Card> updateCardFromId(@RequestBody CardDTO newValue) {
        Card card = newValue.toEntity();
        AtomicReference<Card> result = new AtomicReference<>(new Card());

        this.cardsRepository.findById(newValue.getId())
                .ifPresent(card1 -> {
                    card.setCardId(card1.getCardId());
                    result.set(this.cardsRepository.save(card));
                });

        if (result.get() != null) {
            return ResponseEntity.ok(result.get());
        }

        return ResponseEntity.notFound().build();
    }

    public ResponseEntity<Card> insertCard(@RequestBody CardDTO newValue) {
        Optional<Card> saved = Optional.of(this.cardsRepository.save(newValue.toEntity()));
        return saved.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.badRequest().build());
    }
}
