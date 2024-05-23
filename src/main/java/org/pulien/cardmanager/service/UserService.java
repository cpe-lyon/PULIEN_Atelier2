package org.pulien.cardmanager.service;

import lombok.AllArgsConstructor;
import org.apache.coyote.BadRequestException;
import org.pulien.cardmanager.entity.Card;
import org.pulien.cardmanager.entity.User;

import org.pulien.cardmanager.exception.RegistrationException;
import org.pulien.cardmanager.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UserService {
    private final EncryptionService encryptionService;
    private final UserRepository userRepository;
    private final CardsService cardsService;
    private final CardsInstanceService cardsInstanceService;

    public User getByLogin(String login){
        Optional<User> userOptional = userRepository.findByLogin(login);
        if(userOptional.isPresent()){
            return userOptional.get();
        }
        return null;
    }

    public User register(User userToSave) throws RegistrationException, BadRequestException {
        if (getByLogin(userToSave.getLogin()) != null){
            throw new RegistrationException("The given login is already registred !");
        }

        userToSave.setPassword(encryptionService.encryptPassword(userToSave.getPassword()));
        userRepository.save(userToSave);

        User savedUser = getByLogin(userToSave.getLogin());
        if (savedUser == null){
            throw new RegistrationException("A error appear during the registration");
        }

        // Creation of 5 cards
        List<Card> randomCards = new ArrayList<>();
        for (int i = 0; i < 5; i++) {
            randomCards.add(cardsService.getRandomCard());
        }

        cardsInstanceService.createCardInstance(randomCards, savedUser, false);

        return savedUser;
    }

    public List<User> getAllUsers() {
        return (List<User>) userRepository.findAll();
    }


    // TODO :: maxime complete + ajout d'autres méthodes
}
