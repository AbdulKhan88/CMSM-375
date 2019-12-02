package edu.ben.labs.lab4.lab4.controller;

import edu.ben.labs.lab4.lab4.model.Screw;
import edu.ben.labs.lab4.lab4.model.User;
import edu.ben.labs.lab4.lab4.service.UserService;
import edu.ben.labs.lab4.lab4.service.ScrewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.security.Principal;
import java.util.Base64;
import java.util.List;

// Using "*" can fix the CORS issue but real shitty way to do so
@CrossOrigin(origins = "http://localhost:4200") // allows this to talk to angular port (4200)
@RestController // saying this is a controller
public class Controller {

    @Autowired
    private ScrewService screwService;
    @Autowired
    private UserService userService;

    @RequestMapping("/screws") // Http requests will go to "screws"
    public List<Screw> screwListPage() {
        return screwService.getAllScrews();
    }

    @PostMapping("/screws")
    public Screw addScrew(@RequestBody Screw screw) {
        // ID should be made in back end by DB
        System.out.println("Inside addScrew POST");
        Screw temp = new Screw();
        temp.setName(screw.getName());
        screwService.saveOrUpdate(screw);
        return screw;
    }

    @RequestMapping("/users") // Http requests will go to "login page"
    public List<User> getUsers() {
        return userService.getAllUsers();
    }

    @PostMapping("/users")
    public User registerUser(@RequestBody User user) {
        User temp = new User();
        temp.setEmail(user.getEmail());
        temp.setFirstName(user.getFirstName());
        temp.setLastName(user.getFirstName());
        temp.setUsername(user.getUsername());
        temp.setPassword(user.getPassword());
        userService.registerUserToDB(temp);
        return user;
    }

    @RequestMapping("/login")
    public User login(@RequestBody User user) {
        // return user.getUsername().equals(userName) && user.getPassword().equals(password);
        System.out.println(user.getEmail());
        return userService.findByEmail(user.getEmail());
    }

    @RequestMapping("/user")
    public Principal user(HttpServletRequest request) { // May remove keep for now
        String authToken = request.getHeader("Authorization").substring("Basic".length()).trim();
        return () -> new String(Base64.getDecoder().decode(authToken)).split(":")[0];
    }


    @PostMapping("/loginUser")
    public User loginUser(@RequestBody User user) {

        // assume that the user is not valid until proven otherwise
        User validUser = null;

        // see if the user even exists in the DB
        boolean userExists = userService.findByEmail(user.getEmail()) != null;
        System.out.println(userExists);
        //if they do exist
        if (userExists) {

            // get the user in the DB
            User userDB = userService.findByEmail(user.getEmail());

            // check if the passwords match
            if (userDB.getPassword().equals(user.getPassword())) {
                validUser = userService.findByEmail(user.getEmail());
            }
        }
        System.out.println(validUser.toString());
        return validUser;
    }

    @RequestMapping("/checkUsername")
    public boolean checkUsername(@RequestParam("value") String value) {

        // false ==> unique true ==> not unique
        return userService.findByUsername(value) != null;
    }

    @RequestMapping("/checkEmail")
    public boolean checkEmail(@RequestParam("value") String value) {

        // false ==> unique true ==> not unique
        return userService.findByEmail(value) != null;
    }


    @RequestMapping("/users/{email}")
    public User getUserByEmail(@PathVariable String email) {
        // its mapped to its own "page" by the email so when asking to get a user
        // we dont need to grab a whole list of user we can use filter by email
        User temp = userService.findByEmail(email);
        System.out.println(temp);
        return temp;
    }

    @GetMapping("/screws/{id}")
    public Screw getScrewById(@PathVariable long id) {
        System.out.println("Screw Id:" + id);
        Screw temp = screwService.getScrewById(id);
        return temp;
    }

}




