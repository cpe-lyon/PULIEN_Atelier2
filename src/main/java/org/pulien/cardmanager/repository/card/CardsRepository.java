package org.pulien.cardmanager.repository.card;

import lombok.NonNull;
import org.pulien.cardmanager.entity.Card;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CardsRepository extends JpaRepository<Card, Long> {
    Optional<List<Card>> findAllByName(@NonNull String name);

    Optional<List<Card>> findAllByPriceIsLessThanEqual(int price);

    Optional<List<Card>> findAllByPriceIsGreaterThanEqual(int price);

    Optional<List<Card>> findAllByPriceIsBetween(int mini, int max);

}
