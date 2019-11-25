package edu.ben.labs.lab4.lab4.controller;

import edu.ben.labs.lab4.lab4.model.Screw;
import edu.ben.labs.lab4.lab4.model.User;
import edu.ben.labs.lab4.lab4.service.IUserService;
import edu.ben.labs.lab4.lab4.service.ScrewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200") // allows this to talk to angular port (4200)
@RestController // saying this is a controller
public class Controller {

    @Autowired
    private ScrewService screwService;

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

    @Autowired
    private IUserService userService;

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

    @GetMapping("/loginUser")
    @CrossOrigin(origins = "http://localhost:4200") // allows this to talk to angular port (4200)
    public User loginUser(@RequestBody User user) {

        // assume that the user is not valid until proven otherwise
        User validUser = null;

        // see if the user even exists in the DB
        boolean userExists = userService.findByEmail(user.getEmail()) != null;

        //if they do exist
        if (userExists) {

            // get the user in the DB
            User userDB = userService.findByEmail(user.getEmail());

            // check if the passwords match
            if (userDB.getPassword().equals(user.getPassword())) {
               validUser = userService.findByEmail(user.getEmail());
            }
       }
        return validUser;
    }

    @GetMapping("/checkUsername")
    public boolean checkUsername(@RequestParam("value") String value) {

        // false ==> unique true ==> not unique
        return userService.findByUsername(value) != null;
    }

    @GetMapping("/checkEmail")
    public boolean checkEmail(@RequestParam("value") String value) {

        // false ==> unique true ==> not unique
        return userService.findByEmail(value) != null;
    }


//        User userExists = userService.findByEmail(user.getEmail());
//
//        if (userExists != null) {
//            return null;
//        }
//
//        else {
            //System.out.println(user.toString());
        //}
//    // This method will pull all the users from the DB and see if they contrain the username
//    @GetMapping("/userNames")
//    public List<String> doesUserExist(@RequestParam("value") String value) {
//        return userService.doesUsernameExist(value);
//    }


}




