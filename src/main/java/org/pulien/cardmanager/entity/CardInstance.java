package org.pulien.cardmanager.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "card_instances")
@Data
public class CardInstance {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private User user;

    @ManyToOne
    private Card card;
    @Column(name = "nickname")
    private String nickname;

    public CardInstance() {}

    public CardInstance(Long id, User user, Card card, String nickname) {
        this.id = id;
        this.user = user;
        this.card = card;
        this.nickname = nickname;
    }
}
