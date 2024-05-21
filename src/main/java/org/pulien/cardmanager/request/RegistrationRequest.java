package org.pulien.cardmanager.request;

import lombok.Data;

@Data
public class RegistrationRequest {
    private String email;
    private String firstname;
    private String lastname;
    private String login;
    private String password;
}
