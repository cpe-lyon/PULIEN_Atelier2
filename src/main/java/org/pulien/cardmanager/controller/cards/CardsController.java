package org.pulien.cardmanager.controller.cards;

import lombok.NonNull;
import org.pulien.cardmanager.entity.Card;
import org.pulien.cardmanager.service.CardsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/cards")
public class CardsController {
    @Autowired
    private CardsService cardsService;

    @GetMapping("/get")
    public ResponseEntity<List<Card>> getCards() {
        return cardsService.getCards();
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<Card> getCardById(@NonNull @PathVariable Long id) {
        return cardsService.getCardById(id);
    }

    @GetMapping("/filter/price/{mini}/{max}")
    public ResponseEntity<List<Card>> getCardFilteredByPrice(@PathVariable int mini, @PathVariable int max) {
        return cardsService.getCardFilteredByPrice(mini, max);
    }

    @GetMapping("/filter/price/lower/{max}")
    public ResponseEntity<List<Card>> getCardsCheaperThan(@PathVariable int max) {
        return this.cardsService.getCardsCheaperThan(max);
    }

    @GetMapping("/filter/price/higher/{mini}")
    public ResponseEntity<List<Card>> getCardsMoreExpensiveThan(@PathVariable int mini) {
        return this.cardsService.getCardsMoreExpensiveThan(mini);
    }

    /*@GetMapping("/filter/rarity/{rarity}")
    public ResponseEntity<List<Card>> getCardsMoreExpensiveThan(@PathVariable String rarity) {
        return this.cardsService.getCardsMoreExpensiveThan(rarity);
    }*/

    @GetMapping("/filter/name/{name}")
    public ResponseEntity<List<Card>> getCardFromName(@PathVariable String name) {
        return this.cardsService.getCardFromName(name);
    }

/*    @PutMapping("/update")
    public ResponseEntity<Card> updateCardFromId(@RequestBody  newValue) {
        return this.cardsService.updateCardFromId(newValue);
    }

    @PostMapping("/insert")
    public ResponseEntity<Card> insertCard(@RequestBody CardDTO newValue) {
        return this.cardsService.insertCard(newValue);
    }*/
}
