package org.pulien.cardmanager.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "card_instances", schema = "pulien")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CardInstance {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "card_id")
    private Card card;

    @Column(name = "is_buyable")
    private Boolean isBuyable;
}
