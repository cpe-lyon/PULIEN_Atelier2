package org.pulien.cardmanager.controller.cards;

import lombok.NonNull;
import org.pulien.cardmanager.entity.Card;
import org.pulien.cardmanager.models.dtos.CardDTO;
import org.pulien.cardmanager.models.enums.EnumConverters;
import org.pulien.cardmanager.repository.card.CardsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicReference;

@RestController
@RequestMapping("/api/cards")
public class CardsController {

    @Autowired
    private EnumConverters<String> converter;

    @Autowired
    private CardsRepository cardsRepository;

    @GetMapping("/get")
    public ResponseEntity<List<Card>> getCards() {
        return ResponseEntity.ok(cardsRepository.findAll());
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<Card> getCardById(@NonNull @PathVariable Long id) {

        Optional<Card> card = cardsRepository.findById(id);

        return card.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/filter/price/{mini}/{max}")
    public ResponseEntity<List<Card>> getCardFilteredByPrice(@PathVariable int mini, @PathVariable int max) {
        Optional<List<Card>> filteredCards = cardsRepository.findAllByPriceIsBetween(mini, max);

        return filteredCards.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/filter/price/lower/{max}")
    public ResponseEntity<List<Card>> getCardsCheaperThan(@PathVariable int max) {
        Optional<List<Card>> filteredCards = cardsRepository.findAllByPriceIsLessThanEqual(max);

        return filteredCards.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/filter/price/higher/{mini}")
    public ResponseEntity<List<Card>> getCardsMoreExpensiveThan(@PathVariable int mini) {
        Optional<List<Card>> filteredCards = cardsRepository.findAllByPriceIsGreaterThanEqual(mini);

        return filteredCards.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/filter/rarity/{rarity}")
    public ResponseEntity<List<Card>> getCardsMoreExpensiveThan(@PathVariable String rarity) {
        Optional<List<Card>> filteredCards = cardsRepository.findAllByRarity(converter.convertRarity(rarity));

        return filteredCards.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/filter/name/{name}")
    public ResponseEntity<List<Card>> getCardFromName(@PathVariable String name) {
        Optional<List<Card>> filteredCards = cardsRepository.findAllByName(name);

        return filteredCards.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/update")
    public ResponseEntity<Card> updateCardFromId(@RequestBody CardDTO newValue) {
        Card card = newValue.toEntity();
        AtomicReference<Card> result = new AtomicReference<>(new Card());

        this.cardsRepository.findById(newValue.getId())
                .ifPresent(card1 -> {
                    card.setId(card1.getId());
                    result.set(this.cardsRepository.save(card));
                });

        if (result.get() != null) {
            return ResponseEntity.ok(result.get());
        }

        return ResponseEntity.notFound().build();
    }

    @PostMapping("/post")
    public ResponseEntity<Card> insertCard(@RequestBody CardDTO newValue) {
        Optional<Card> saved = Optional.of(this.cardsRepository.save(newValue.toEntity()));
        return saved.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.badRequest().build());
    }
}
