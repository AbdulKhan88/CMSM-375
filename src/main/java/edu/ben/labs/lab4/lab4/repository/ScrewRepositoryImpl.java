package edu.ben.labs.lab4.lab4.repository;

import edu.ben.labs.lab4.lab4.model.Screw;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
@Repository
public abstract class ScrewRepositoryImpl implements ScrewRepository {
    @PersistenceContext
    private EntityManager entityManager;
    /**
     * File Path for Screw Creation File
     */
    private String CREATE_SCREW_FILE_PATH = "src/createScrew.txt";



    /**
     * A Creator method to make Screw Objects
     *
     * @param filePath String path of create file
     * @return List<Screw> A list of Screws
     */
    public List<Screw> createScrews(String filePath) {
        File createFile = new File(filePath);
        List<Screw> screwList = new ArrayList<>();

        try {
            Scanner fileIn = new Scanner(createFile);

            String temp;
            String[] tempArr;
            Screw s1;
            fileIn.nextLine(); // skip header line

            while (fileIn.hasNextLine()) {
                temp = fileIn.nextLine();
                tempArr = temp.split(",");
                s1 = new Screw();
                s1.setName(tempArr[0]);
                s1.setHeadType(tempArr[1]);
                s1.setGauge(tempArr[2]);
                s1.setThreadsPerInch(tempArr[3]);
                s1.setShaftLen(tempArr[4]);
                s1.setPrice(Double.valueOf(tempArr[5]));
                s1.setCategory(tempArr[6]);
                screwList.add(s1);
            }

            fileIn.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        return screwList;
    }
}
