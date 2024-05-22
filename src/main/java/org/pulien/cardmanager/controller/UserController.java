package org.pulien.cardmanager.controller;

import lombok.AllArgsConstructor;
import org.pulien.cardmanager.entity.User;
import org.pulien.cardmanager.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping(value = "/api/v1/user")
public class UserController {

    private final UserService userService;

    @GetMapping(value = "/getAllUsers")
    public ResponseEntity<List<User>> getAllUsers(){
        return ResponseEntity.ok(userService.getAllUsers());
    }

    // et d'autres endpoints...
    // TODO :: maxime
}
