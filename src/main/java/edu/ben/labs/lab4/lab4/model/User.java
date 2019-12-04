package edu.ben.labs.lab4.lab4.model;

import javax.persistence.*;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import java.util.Objects;

@Entity // this makes sure to tell the database to make a table after this model
@Table(name = "user")
public class User {

    //STEP 1 YOU ARE DONE

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = "user_generator", sequenceName = "user_seq", allocationSize = 10)
    private long id; // this is our object ID for the DB and the generated value goes with it.

    private String email;
    private String password;
    private String username;
    private String firstName;
    private String lastName;

    /**
     * constructor with no parameters
     */
    public User() {
    }

    /**
     * Constructor
     * @param username the user name
     * @param email the email
     * @param firstName the first name
     * @param lastName the last name
     * @param password the password that will be hashed
     */
    public User(String username, String email, String firstName, String lastName, String password) {
        this.username = username;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return Objects.equals(username, user.username) &&
                Objects.equals(email, user.email) &&
                Objects.equals(firstName, user.firstName) &&
                Objects.equals(lastName, user.lastName) &&
                Objects.equals(id, user.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, firstName, lastName, email, username);
    }

    @Override
    public String toString() {
        return this.username + " " + this.firstName + " "  + this.lastName + " " + this.email;
    }

    // GETTERS AND SETTERS BELOW
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
}
