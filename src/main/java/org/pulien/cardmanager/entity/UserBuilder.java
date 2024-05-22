package org.pulien.cardmanager.entity;

public class UserBuilder {
    private String firstname;
    private String lastname;
    private String login;
    private String email;
    private String password;

    public UserBuilder(){}

    public UserBuilder setFirstname(String firstname) {
        this.firstname = firstname;
        return this;
    }

    public UserBuilder setLastname(String lastname) {
        this.lastname = lastname;
        return this;
    }

    public UserBuilder setLogin(String login) {
        this.login = login;
        return this;
    }

    public UserBuilder setEmail(String email) {
        this.email = email;
        return this;
    }

    public UserBuilder setPassword(String password) {
        this.password = password;
        return this;
    }

    public User build(){
        return new User(this.firstname, this.lastname, this.email,this.login,this.password);
    }
}
