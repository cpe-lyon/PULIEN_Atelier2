package org.pulien.cardmanager.service;

import org.pulien.cardmanager.entity.Card;
import org.pulien.cardmanager.entity.CardInstance;
import org.pulien.cardmanager.entity.User;
import org.pulien.cardmanager.exception.CardNotFoundException;
import org.pulien.cardmanager.exception.UserNotFoundException;
import org.pulien.cardmanager.repository.UserRepository;
import org.pulien.cardmanager.repository.card.CardInstancesRepository;

import java.util.Optional;

public class MarketPlaceImpl implements MarketPlaceService {
    private UserRepository userRepository;
    private CardInstancesRepository cardInstancesRepository;

    @Override
    public Optional<Card> buy(String login, Card card) throws UserNotFoundException, CardNotFoundException {
        Optional<User> currentUser = userRepository.findByLogin(login);

        if (currentUser.isEmpty()) {
            throw new UserNotFoundException(String.format("The user %s could not be found", login));
        }

        Optional<CardInstance> cardInstance = cardInstancesRepository.findById(card.getCardId());

        if (cardInstance.isEmpty()) {
            throw new CardNotFoundException(String.format("The card %s could not be found", card.getName()));
        }

        if (!cardInstance.get().isBuyable()) {
            return null;
        }

        User user = currentUser.get();
    }
}
