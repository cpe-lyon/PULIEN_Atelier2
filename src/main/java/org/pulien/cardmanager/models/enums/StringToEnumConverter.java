package org.pulien.cardmanager.models.enums;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class StringToEnumConverter implements EnumConverters<String> {
    @Override
    public Rarities convertRarity(String rarity) {
        try {
            return Rarities.valueOf(rarity.toUpperCase());
        } catch (IllegalArgumentException e) {
            log.error("Illegal argument while trying to convert an enum: {}", rarity);
            return null;
        }
    }
}
