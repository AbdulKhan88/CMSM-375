package edu.ben.labs.lab4.lab4.controller;

import edu.ben.labs.lab4.lab4.model.Screw;
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
}
