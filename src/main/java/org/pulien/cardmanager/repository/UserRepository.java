package org.pulien.cardmanager.repository;

import org.pulien.cardmanager.entity.User;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface UserRepository extends CrudRepository<User, Long> {
    Optional<User> findByLogin(String login);

    // TODO :: maxime potentiellement de trucs ajouter ici
}
