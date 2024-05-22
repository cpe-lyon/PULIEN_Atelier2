package org.pulien.cardmanager.exception;

import io.jsonwebtoken.io.SerialException;
import jakarta.servlet.ServletException;

public class AuthorizationException extends ServletException {
    public AuthorizationException(String message){
        super(message);
    }
}
