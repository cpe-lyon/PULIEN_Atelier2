package org.pulien.cardmanager.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "cards")
@Data
public class Card {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name")
    private String name;
    @Column(name = "pv")
    private int pv;
    @Column(name = "image")
    private String image;
    @Column(name = "type")
    private String type;

    public Card() {}

    public Card(Long id, String name, int pv, String image, String type) {
        this.id = id;
        this.name = name;
        this.pv = pv;
        this.image = image;
        this.type = type;
    }
}
