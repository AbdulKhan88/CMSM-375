package edu.ben.labs.lab4.lab4.controller;

import edu.ben.labs.lab4.lab4.model.Screw;
import edu.ben.labs.lab4.lab4.repository.ScrewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200") // allows this to talk to angular port (4200)
@RestController // saying this is a controller
public class Controller {

    @Autowired
    // this is used to get the bean called repository
    // Which is make by spring, this will handle the data
    private ScrewRepository repo;

    @RequestMapping("/screws") // Http requests will go to "screws"
    public List<Screw> screwListPage() {
        Screw temp = new Screw("test");
        System.out.println(temp);
        return (List<Screw>) repo.findAll();
    }

    @PostMapping("/screws")
    public Screw addScrew(@RequestBody Screw screw) {
        // ID should be made in back end by DB
        System.out.println("Inside addScrew POST");
        Screw temp = new Screw();
        temp.setContent(screw.getContent());
        repo.save(temp);
        return screw;
    }
}
