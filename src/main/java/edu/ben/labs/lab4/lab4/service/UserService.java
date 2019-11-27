package edu.ben.labs.lab4.lab4.service;

import edu.ben.labs.lab4.lab4.model.User;
import java.util.List;

public interface UserService {

    List<User> getAllUsers();

    User findByUsername(String username);

    User findByEmail(String email);

    void registerUserToDB(User user);

}