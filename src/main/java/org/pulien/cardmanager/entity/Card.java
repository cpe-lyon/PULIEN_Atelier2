package org.pulien.cardmanager.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "cards", schema = "pulien")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Card {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "card_id")
    private Long cardId;

    @Column(name = "player_name")
    private String name;

    @Column(name = "image")
    private String image;

    @Column(name = "nation")
    private String nation;

    @Column(name = "pace")
    private int pace;

    @Column(name = "price")
    private int price;

    @Column(name = "rating")
    private int rating;
}
