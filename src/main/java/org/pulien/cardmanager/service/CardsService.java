package org.pulien.cardmanager.service;

import lombok.NoArgsConstructor;
import lombok.NonNull;
import org.apache.coyote.BadRequestException;
import org.pulien.cardmanager.entity.Card;
import org.pulien.cardmanager.repository.card.CardsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.*;
import java.util.concurrent.atomic.AtomicInteger;

@Service
@NoArgsConstructor
public class CardsService {
    private final Random random = new Random();

    @Autowired
    private CardsRepository cardsRepository;

    public ResponseEntity<List<Card>> getCards() {
        return ResponseEntity.ok(cardsRepository.findAll());
    }

    public List<Card> getAllCards() {
        return cardsRepository.findAll();
    }

    public Optional<List<Card>> getAllByRatingRank(int min, int max) {
        return cardsRepository.findAllByRatingBetween(min, max);
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


    public ResponseEntity<List<Card>> getCardFromName(@PathVariable String name) {
        Optional<List<Card>> filteredCards = cardsRepository.findAllByName(name);

        return filteredCards.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    /**
     * get random card pondéré par sa rareté
     * @return Card
     * @throws BadRequestException
     */
    public Card getRandomCard() throws BadRequestException {
        List<List<Card>> allTiers = new ArrayList<>();

        List<Card> allCardsTier1 = getAllByRatingRank(0, 85)
                .orElseThrow(() -> new BadRequestException("There is no card."));

        List<Card> allCardsTier2 = getAllByRatingRank(86, 90).orElse(Collections.emptyList());
        List<Card> allCardsTier3 = getAllByRatingRank(91, 99).orElse(Collections.emptyList());

        allTiers.add(allCardsTier1);
        if (!allCardsTier2.isEmpty()) allTiers.add(allCardsTier2);
        if (!allCardsTier3.isEmpty()) allTiers.add(allCardsTier3);

        int tierDrew = random.nextInt(10);
        List<Card> tier;

        if (tierDrew < 6) {
            tier = allTiers.get(0);
        } else if (tierDrew < 9 && allTiers.size() > 1) {
            tier = allTiers.get(1);
        } else if (allTiers.size() > 2) {
            tier = allTiers.get(2);
        } else {
            tier = allTiers.get(0);
        }

        if (tier.isEmpty()) {
            throw new BadRequestException("There is no card.");
        }

        return tier.get(random.nextInt(tier.size()));
    }

    public void register(Card card) {
        cardsRepository.save(card);
    }
}
