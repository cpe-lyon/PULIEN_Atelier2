package org.pulien.cardmanager.controller;

import lombok.AllArgsConstructor;
import org.pulien.cardmanager.exception.LoginException;
import org.pulien.cardmanager.exception.PasswordException;
import org.pulien.cardmanager.exception.RegistrationException;
import org.pulien.cardmanager.request.AuthRequest;
import org.pulien.cardmanager.request.CheckTokenRequest;
import org.pulien.cardmanager.request.RegistrationRequest;
import org.pulien.cardmanager.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping(value = "/auth")
public class AuthController {
    private final AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody AuthRequest authRequest) throws PasswordException, LoginException {
        return ResponseEntity.ok(authService.login(authRequest));
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegistrationRequest registrationRequest) throws RegistrationException {
        return ResponseEntity.ok(authService.register(registrationRequest));
    }

    @PostMapping("/checktoken")
    public ResponseEntity<Boolean> checkToken(@RequestBody CheckTokenRequest checkTokenRequest) {
        return ResponseEntity.ok(authService.checkToken(checkTokenRequest));
    }
}


