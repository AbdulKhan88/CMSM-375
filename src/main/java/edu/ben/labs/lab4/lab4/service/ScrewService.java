package edu.ben.labs.lab4.lab4.service;

import edu.ben.labs.lab4.lab4.model.Screw;

import java.util.List;

public interface ScrewService {
    public List<Screw> getAllScrews();

    public Screw getScrewById(long id);

    public void saveOrUpdate(Screw screw);

    public Screw deleteScrew(Screw screw);

    public void addScrewList();
}
