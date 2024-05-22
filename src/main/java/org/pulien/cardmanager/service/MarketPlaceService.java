package org.pulien.cardmanager.service;

import org.pulien.cardmanager.entity.Card;
import org.pulien.cardmanager.exception.CardNotFoundException;
import org.pulien.cardmanager.exception.UserNotFoundException;

import java.util.Optional;

public interface MarketPlaceService {
    Optional<Card> buy(String login, Card card) throws UserNotFoundException, CardNotFoundException;
}
