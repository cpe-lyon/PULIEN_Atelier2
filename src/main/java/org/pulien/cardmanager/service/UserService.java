package org.pulien.cardmanager.service;

import lombok.AllArgsConstructor;
import org.pulien.cardmanager.entity.User;

import org.pulien.cardmanager.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UserService {
    private final EncryptionService encryptionService;
    private final UserRepository userRepository;

    public User getByLogin(String login){
        Optional<User> userOptional = userRepository.findByLogin(login);
        if(userOptional.isPresent()){
            return userOptional.get();
        }
        return null;
    }

    public User register(User userToSave) {
        // add user with encrypted password
        return null;
    }

    public List<User> getAllUsers() {
        return null;
    }


    // TODO :: maxime complete + ajout d'autres méthodes
}
