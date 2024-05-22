package org.pulien.cardmanager.controller.marketPlace;

import lombok.NonNull;
import org.pulien.cardmanager.entity.Card;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/marketPlace")
public class MarketPlaceController {

    /**
     *
     * @param login - current user login
     * @param card - the card we want to buy
     * @return
     */
    @GetMapping("/buy")
    private ResponseEntity<Card> buyACard(@NonNull @RequestAttribute String login, @NonNull @RequestBody Card card) {

    }
}