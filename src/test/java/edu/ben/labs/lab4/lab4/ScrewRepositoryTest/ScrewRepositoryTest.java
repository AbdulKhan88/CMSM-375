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




}
