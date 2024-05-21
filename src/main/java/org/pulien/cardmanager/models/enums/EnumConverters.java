package org.pulien.cardmanager.models.enums;

public interface EnumConverters<T> {
    Rarities convertRarity(T rarity);
}
