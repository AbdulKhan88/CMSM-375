package edu.ben.labs.lab4.lab4.service;

import edu.ben.labs.lab4.lab4.model.Screw;

import java.util.List;


public interface ScrewService {

    List<Screw> getAllScrews();

    Screw getScrewById(long id);

    void saveOrUpdate(Screw screw);

    Screw deleteScrew(Screw screw);

    void addScrewList();
}
