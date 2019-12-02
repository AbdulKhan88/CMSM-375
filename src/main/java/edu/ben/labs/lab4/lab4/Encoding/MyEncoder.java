package edu.ben.labs.lab4.lab4.Encoding;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class MyEncoder {

    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public MyEncoder() {
        this.bCryptPasswordEncoder = new BCryptPasswordEncoder();
    }

    public String encodePassword(String password) {
        // https://stackoverflow.com/questions/6832445/how-can-bcrypt-have-built-in-salts

        return this.bCryptPasswordEncoder.encode(password);
    }

}
