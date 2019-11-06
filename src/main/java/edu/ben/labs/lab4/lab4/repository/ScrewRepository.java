package edu.ben.labs.lab4.lab4.repository;

import edu.ben.labs.lab4.lab4.model.Screw;
import org.springframework.data.repository.CrudRepository;

public interface ScrewRepository extends CrudRepository<Screw, Long> {
    // can add methods here for more complex database stuff
}
