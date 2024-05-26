package org.pulien.cardmanager.service;

import lombok.AllArgsConstructor;
import org.apache.coyote.BadRequestException;
import org.pulien.cardmanager.entity.Card;
import org.pulien.cardmanager.entity.CardInstance;
import org.pulien.cardmanager.entity.User;
import org.pulien.cardmanager.exception.AuthorizationException;
import org.pulien.cardmanager.exception.CardNotFoundException;
import org.pulien.cardmanager.exception.UserNotFoundException;
import org.pulien.cardmanager.repository.UserRepository;
import org.pulien.cardmanager.repository.card.CardInstancesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Objects;
import java.util.Optional;

@Service
@AllArgsConstructor
public class MarketPlaceImpl implements MarketPlaceService {
    private UserRepository userRepository;
    private CardInstancesRepository cardInstancesRepository;

    @Autowired
    private CardsInstanceService cardsInstanceService;

    @Override
    public Optional<CardInstance> buy(String login, Long cardInstanceId) throws UserNotFoundException, CardNotFoundException, BadRequestException {
        Optional<User> currentUser = userRepository.findByLogin(login);

        if (currentUser.isEmpty()) {
            throw new UserNotFoundException(String.format("The user %s could not be found", login));
        }

        Optional<CardInstance> cardInstance = cardInstancesRepository.findById(cardInstanceId);

        if (cardInstance.isEmpty()) {
            throw new CardNotFoundException("The card with this could not be found");
        }

        CardInstance cardInstance1 = cardInstance.get();

        if (Objects.equals(cardInstance1.getUser().getLogin(), login)) {
            throw new BadRequestException("You cannot buy your own card!");
        }

        if (!cardInstance1.getIsBuyable()) {
            return Optional.empty();
        }

        User buyingUser = currentUser.get();
        if (buyingUser.getCash() < cardInstance1.getCard().getPrice()) {
            return Optional.empty();
        }

        // Buyer spends his money :'(
        buyingUser.setCash(buyingUser.getCash() - cardInstance1.getCard().getPrice());
        User savedUser = userRepository.save(buyingUser);

        // Seller gets his money \o/
        User seller = cardInstance1.getUser();
        int currentSellerCash = cardInstance1.getUser().getCash();
        seller.setCash(cardInstance1.getCard().getPrice() + currentSellerCash);
        userRepository.save(seller);

        // Cards is now owned by buyer and the instance is not buyable anymore X
        cardInstance1.setUser(savedUser);
        cardInstance1.setIsBuyable(Boolean.FALSE);
        cardsInstanceService.updateCardInstance(cardInstance1.getId(), cardInstance1);

        return Optional.of(cardInstance1);
    }

    @Override
    public Page<CardInstance> displayMarketPlace(Pageable pageable, String login) {
        return this.cardsInstanceService.getBuyableCardInstances(pageable, login);
    }

    @Override
    public Optional<CardInstance> sell(Long cardInstanceId, String login) throws CardNotFoundException, AuthorizationException {
        Optional<CardInstance> cardInstance = cardInstancesRepository.findById(cardInstanceId);

        if (cardInstance.isEmpty()) {
            throw new CardNotFoundException(String.format("No card instance found with id %d", cardInstanceId));
        }

        CardInstance cardInstance1 = cardInstance.get();

        // this check may be useless ...
        if (!Objects.equals(cardInstance1.getUser().getLogin(), login)) {
            throw new AuthorizationException("Not allowed to sell this card!!!");
        }

        cardInstance1.setIsBuyable(true);

        return Optional.of(cardInstancesRepository.save(cardInstance1));
    }
}
