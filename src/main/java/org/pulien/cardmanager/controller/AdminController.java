package org.pulien.cardmanager.controller;

import lombok.AllArgsConstructor;
import org.pulien.cardmanager.entity.Card;
import org.pulien.cardmanager.service.CardsService;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.Random;

@Controller
@AllArgsConstructor
@RequestMapping(value = "/data")
public class AdminController {
    private final CardsService cardsService;

    @PostMapping(value = "/loadMockData")
    public ResponseEntity<Boolean> loadData(){
        String cheminFichier = "C:\\Users\\clere\\Desktop\\Copie de FIFA23 - MAIN.csv";

        try (BufferedReader br = new BufferedReader(new FileReader(cheminFichier))) {

            String ligne;
            while ((ligne = br.readLine()) != null) {
                String[] attributes = ligne.split(",");
                Card card = Card.builder()
                        .name(attributes[1])
                        .rating(Integer.valueOf(attributes[2]))
                        .nation(attributes[3])
                        .height(Integer.valueOf(attributes[4]))
                        .weight(Integer.valueOf(attributes[5]))
                        .pace(Integer.valueOf(attributes[6]))
                        .price(Integer.valueOf(attributes[2])* 100000)
                        .build();

                cardsService.register(card);

            }

        } catch (IOException e) {
            System.err.println("Erreur lors de la lecture du fichier : " + e.getMessage());
        }
        return ResponseEntity.ok(true);
    }
}
