package org.pulien.cardmanager.controller.marketPlace;

import lombok.AllArgsConstructor;
import lombok.NonNull;
import lombok.extern.slf4j.Slf4j;
import org.apache.coyote.BadRequestException;
import org.pulien.cardmanager.entity.Card;
import org.pulien.cardmanager.entity.CardInstance;
import org.pulien.cardmanager.exception.AuthorizationException;
import org.pulien.cardmanager.exception.CardNotFoundException;
import org.pulien.cardmanager.exception.UserNotFoundException;
import org.pulien.cardmanager.service.MarketPlaceService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@Slf4j
@AllArgsConstructor
@RequestMapping("/api/v1/marketPlace")
public class MarketPlaceController {
    private final MarketPlaceService marketPlaceService;

    /**
     *
     * @param username - current user login
     * @param cardInstanceId - the card we want to buy
     */
    @PostMapping("/buy/{cardInstanceId}")
    public ResponseEntity<CardInstance> buyACard(@NonNull @RequestAttribute String username, @NonNull @PathVariable Long cardInstanceId) throws BadRequestException {
        try {
            return marketPlaceService.buy(username, cardInstanceId).map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.badRequest().build());
        } catch (UserNotFoundException | CardNotFoundException userNotFoundException) {
            return ResponseEntity.notFound().build();
        } catch (BadRequestException e) {
            throw new BadRequestException(e);
        }
    }

    @GetMapping
    public Page<Card> displayMarketPlace(@PageableDefault(value = 5) Pageable pageable) {
        return this.marketPlaceService.displayMarketPlace(pageable);
    }

    @PostMapping("/sell/{cardInstanceId}")
    public ResponseEntity<CardInstance> sellACard(@RequestAttribute String username, @NonNull @PathVariable Long cardInstanceId) {
        try {
            return this.marketPlaceService.sell(cardInstanceId, username).map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.badRequest().build());
        } catch (AuthorizationException e) {
            log.error(e.getMessage());
            return ResponseEntity.status(401).build();
        } catch (CardNotFoundException e) {
            log.error(e.getMessage());
            return ResponseEntity.notFound().build();
        }
    }
}