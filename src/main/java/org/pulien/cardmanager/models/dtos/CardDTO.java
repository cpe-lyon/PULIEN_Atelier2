package org.pulien.cardmanager.models.dtos;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.pulien.cardmanager.entity.Card;
import org.pulien.cardmanager.models.enums.Rarities;

@Getter
@Setter
@Builder
public class CardDTO implements Dto<Card> {
    private Long id;
    private String name;
    private int pv;
    private String image;
    private String type;
    private int price;
    private Rarities rarity;


    @Override
    public Card toEntity() {
        return new Card(this.id, this.name, this.pv, this.image, this.type, this.price, this.rarity);
    }
}
