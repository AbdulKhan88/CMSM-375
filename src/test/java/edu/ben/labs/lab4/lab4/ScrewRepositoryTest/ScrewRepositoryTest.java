package edu.ben.labs.lab4.lab4.ScrewRepositoryTest;

import edu.ben.labs.lab4.lab4.model.Screw;
import edu.ben.labs.lab4.lab4.repository.ScrewRepositoryImpl;
import org.junit.*;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import org.junit.Assert;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class ScrewRepositoryTest {
    // Path to screw file
    private String CREATE_SCREW_FILE_PATH = "src/createScrew.txt";
    // File for creating screw
    private File temp = new File(CREATE_SCREW_FILE_PATH);

    @Test
    /**
     * A test to see if file exists
     */
    public void testFileExist() {

        assert (temp.exists());
    }

    @Test
    /**
     * A test to see if file can be read
     */
    public void testFileCanRead() {

        assert (temp.canRead());
    }

    @Test
    /**
     * A Test to see if object are made correctly
     */
    public void testCreateFromFile() {
        ScrewRepositoryImpl screwRepoImpl = new ScrewRepositoryImpl();
        List<Screw> expected = new ArrayList<>();
        try {
            Scanner fileIn = new Scanner(temp);
            String temp;
            String[] tempArr;
            Screw s1;
            fileIn.nextLine(); // skip header line
            while (fileIn.hasNextLine()) {
                temp = fileIn.nextLine();
                tempArr = temp.split(",");

                s1 = new Screw(tempArr[0], tempArr[1], tempArr[2], tempArr[3], tempArr[4], Double.valueOf(tempArr[5]), tempArr[6]);

                expected.add(s1);
            }

            fileIn.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        List<Screw> actual = screwRepoImpl.createScrews(CREATE_SCREW_FILE_PATH);
        Assert.assertEquals(actual.toArray().length, expected.toArray().length);
    }

}
