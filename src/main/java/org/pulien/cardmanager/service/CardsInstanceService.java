package org.pulien.cardmanager.service;

import jakarta.transaction.Transactional;
import lombok.NoArgsConstructor;
import org.pulien.cardmanager.entity.Card;
import org.pulien.cardmanager.entity.CardInstance;
import org.pulien.cardmanager.repository.card.CardInstancesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@NoArgsConstructor
public class CardsInstanceService {
    @Autowired
    private CardInstancesRepository cardInstancesRepository;

    public List<Card> getCardsByUserId(Long userId) {
        return cardInstancesRepository.findCardsByUserId(userId);
    }

    public CardInstance saveCardInstance(CardInstance cardInstance) {
        return this.cardInstancesRepository.save(cardInstance);
    }

    @Transactional // Atomicity
    public CardInstance updateCardInstance(Long id, CardInstance newCardInstance) {
        return cardInstancesRepository.findById(id).map(cardInstance -> {
            cardInstance.setUser(newCardInstance.getUser());
            cardInstance.setCard(newCardInstance.getCard());
            cardInstance.setNickname(newCardInstance.getNickname());
            return this.cardInstancesRepository.save(cardInstance);
        }).orElseThrow(() -> new RuntimeException("CardInstance not found with id " + id));
    }

    public List<CardInstance> saveCardInstances(List<CardInstance> cardInstances) {
        return this.cardInstancesRepository.saveAll(cardInstances);
    }

    public List<CardInstance> getAllCardInstances() {
        return this.cardInstancesRepository.findAll();
    }

    public Optional<CardInstance> getCardInstanceById(Long id) {
        return this.cardInstancesRepository.findById(id);
    }
}
