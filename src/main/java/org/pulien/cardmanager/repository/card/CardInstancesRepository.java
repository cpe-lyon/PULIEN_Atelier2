package org.pulien.cardmanager.repository.card;

import org.pulien.cardmanager.entity.Card;
import org.pulien.cardmanager.entity.CardInstance;
import org.pulien.cardmanager.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CardInstancesRepository extends JpaRepository<CardInstance, Long> {
    @Query("SELECT ci.card FROM CardInstance ci WHERE ci.user.userId = :userId")
    List<Card> findCardsByUserId(@Param("userId") Long userId);

    @Query("SELECT ci FROM CardInstance ci WHERE ci.user.login = :login")
    List<CardInstance> findCardInstanceByUserLogin(String login);
}
