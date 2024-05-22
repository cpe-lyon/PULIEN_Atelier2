package org.pulien.cardmanager.service;

import org.apache.coyote.BadRequestException;
import org.pulien.cardmanager.entity.Card;
import org.pulien.cardmanager.entity.CardInstance;
import org.pulien.cardmanager.exception.AuthorizationException;
import org.pulien.cardmanager.exception.CardNotFoundException;
import org.pulien.cardmanager.exception.UserNotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface MarketPlaceService {
    Optional<CardInstance> buy(String login, Long cardInstanceId) throws UserNotFoundException, CardNotFoundException, BadRequestException;

    Page<Card> displayMarketPlace(Pageable pageable);

    Optional<CardInstance> sell(Long cardId, String login) throws CardNotFoundException, AuthorizationException;
}
