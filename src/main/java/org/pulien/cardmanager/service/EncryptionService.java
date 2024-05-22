package org.pulien.cardmanager.service;

import org.jasypt.util.password.BasicPasswordEncryptor;
import org.springframework.stereotype.Service;

@Service
public class EncryptionService {
    private final String Key = "secret";

    public String encryptPassword(String inputPassword) {
        BasicPasswordEncryptor encryptor = new BasicPasswordEncryptor();
        return encryptor.encryptPassword(inputPassword);
    }

    public boolean checkPassword(String inputPassword, String encryptedStoredPassword) {
        BasicPasswordEncryptor encryptor = new BasicPasswordEncryptor();
        return encryptor.checkPassword(inputPassword, encryptedStoredPassword);
    }
}
