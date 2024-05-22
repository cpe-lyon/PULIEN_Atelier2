package org.pulien.cardmanager.service;

import lombok.AllArgsConstructor;
import org.pulien.cardmanager.authentification.JwtUtil;
import org.pulien.cardmanager.entity.UserBuilder;
import org.pulien.cardmanager.exception.PasswordException;
import org.pulien.cardmanager.request.AuthRequest;
import org.pulien.cardmanager.request.CheckTokenRequest;
import org.pulien.cardmanager.request.RegistrationRequest;
import org.springframework.stereotype.Service;
import org.pulien.cardmanager.entity.User;
import org.pulien.cardmanager.exception.RegistrationException;
import org.pulien.cardmanager.exception.LoginException;

@Service
@AllArgsConstructor
public class AuthService {

    private final JwtUtil jwtUtil;
    private final EncryptionService encryptionService;
    private final UserService userService;

    public String login(AuthRequest authRequest) throws PasswordException, LoginException {
        User user;
        try {
            user = userService.getByLogin(authRequest.getUsername());
        } catch (Exception e){
            throw new LoginException("The given login doesn't exists.");
        }
        if (encryptionService.checkPassword(authRequest.getPassword(), user.getPassword())){
            return jwtUtil.generateToken(authRequest.getUsername());
        }else {
            throw new PasswordException("The given password is wrong!");
        }
    }

    public String register(RegistrationRequest request) throws RegistrationException{
        User user = new UserBuilder()
                .setEmail(request.getEmail())
                .setFirstname(request.getFirstname())
                .setLastname(request.getLastname())
                .setLogin(request.getLogin())
                .setPassword(request.getPassword())
                .build();

        User savedUser = userService.register(user);

        return jwtUtil.generateToken(savedUser.getLogin());
    }

    public Boolean checkToken(CheckTokenRequest checkTokenRequest) {
        String login = jwtUtil.extractUsername(checkTokenRequest.getToken());

        User user = userService.getByLogin(login);
        if(user == null){
            //handle npe
            return false;
        }

        return jwtUtil.validateToken(checkTokenRequest.getToken(), user.getLogin());
    }
}
