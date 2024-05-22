package org.pulien.cardmanager.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "user", schema = "pulien")
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "firstname")
    private String firstname;
    @Column(name = "lastname")
    private String lastname;
    @Column(name = "login")
    private String login;
    @Column(name = "email")
    private String email;
    @Column(name = "password")
    private String password;

    public User(){}

    public User(String firstname, String lastname, String email, String login, String password) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.login = login;
        this.password = password;
    }
}
