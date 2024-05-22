package org.pulien.cardmanager.controller.cards;

import org.apache.coyote.BadRequestException;
import org.pulien.cardmanager.entity.Card;
import org.pulien.cardmanager.entity.CardInstance;
import org.pulien.cardmanager.service.CardsInstanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/cardsInstances")
public class CardInstancesController {
    @Autowired
    private CardsInstanceService cardInstanceService;

    @GetMapping
    public List<CardInstance> getAllCardInstances() {
        return cardInstanceService.getAllCardInstances();
    }

    @GetMapping("/{id}")
    public Optional<CardInstance> getCardInstanceById(@PathVariable Long id) {
        return cardInstanceService.getCardInstanceById(id);
    }

    /**
     * Get all the cards a user detains
     * @param userId
     * @return
     */
    @GetMapping("/user/{userId}/cards")
    public List<Card> getCardsByUserId(@PathVariable Long userId) {
        return cardInstanceService.getCardsByUserId(userId);
    }

    @GetMapping("/currentuser")
    public ResponseEntity<List<CardInstance>> getCurrentUserCards(@RequestAttribute String username) {
        return ResponseEntity.ok(cardInstanceService.getCardsByUserLogin(username));
    }

    @PostMapping
    public CardInstance createCardInstance(@RequestBody CardInstance cardInstance) {
        return cardInstanceService.saveCardInstance(cardInstance);
    }

    @PostMapping("/batch")
    public List<CardInstance> createCardInstances(@RequestBody List<CardInstance> cardInstances) {
        return cardInstanceService.saveCardInstances(cardInstances);
    }

    @PutMapping("/{id}")
    public CardInstance updateCardInstance(@PathVariable Long id, @RequestBody CardInstance cardInstance) {
        return cardInstanceService.updateCardInstance(id, cardInstance);
    }
}
