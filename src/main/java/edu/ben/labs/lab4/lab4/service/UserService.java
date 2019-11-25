package edu.ben.labs.lab4.lab4.service;

import edu.ben.labs.lab4.lab4.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import edu.ben.labs.lab4.lab4.repository.UserRepository;

@Service
@Transactional
public class UserService implements IUserService {

    @Autowired
    UserRepository userRepository;

    @Override
    public List<User> getAllUsers() {
        return (List<User>) userRepository.findAll();
    }

    @Override
    public void registerUserToDB(User user) {
        userRepository.save(user);
    }

    @Override
    public User findByUsername(String userName) {
        return userRepository.findByUsername(userName);
    }

    @Override
    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

}


// user the bcrypt encoder to encode the password
//user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));


//    public void saveUser(User user) {
//        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
//        userRepository.save(user);
//    }



