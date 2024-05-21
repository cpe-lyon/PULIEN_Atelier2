package org.pulien.cardmanager.entity;

import jakarta.persistence.*;
import lombok.*;
import org.pulien.cardmanager.models.enums.Rarities;

@Entity
@Table(name = "cards")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Card {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "card_id")
    private Long cardId;

    @Column(name = "name")
    private String name;

    @Column(name = "pv")
    private int pv;

    @Column(name = "image")
    private String image;

    @Column(name = "type")
    private String type;

    @Column(name = "price")
    private int price;

    @Column(name = "rarity")
    private Rarities rarity;
}
