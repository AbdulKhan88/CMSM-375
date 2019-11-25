package edu.ben.labs.lab4.lab4.service;

import edu.ben.labs.lab4.lab4.model.Screw;
import edu.ben.labs.lab4.lab4.repository.ScrewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.thymeleaf.expression.Lists;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.io.File;
import java.io.FileNotFoundException;
import java.util.*;

@Service
@Transactional
public class ScrewServiceImpl implements ScrewService {
    // this class acts a brings between the crud repo and the service

    /**
     * File Path for Screw Creation File
     */
    private String CREATE_SCREW_FILE_PATH = "src/createScrew.txt";
    /**
     * Path to the folder that stores screw img
     */
    private String SCREW_IMG_PATH = "src/screwImg";

    @Autowired
    ScrewRepository screwRepository;

    @Override
    public List<Screw> getAllScrews() {
        return (List<Screw>) screwRepository.findAll();
    }

    @Override
    public Screw getScrewById(long id) {
        return screwRepository.findById(id).get();
    }

    @Override
    public void saveOrUpdate(Screw screw) {
        screwRepository.save(screw);
    }

    @Override
    public Screw deleteScrew(Screw screw) {
        screwRepository.delete(screw);
        return null;
    }

    /**
     * method to add screws from the file and avoiding adding duplicates
     */
    public void addScrewList() {
        List<Screw> screwList = createScrews(CREATE_SCREW_FILE_PATH); // list of screw from file
        List<Screw> dbList = getAllScrews(); // list of screws from DB
        Iterator<Screw> temp = screwList.iterator();
        if (!dbList.isEmpty()) { // if DB is not empty then check
            while (temp.hasNext()) {
                if (dbList.contains(temp.next())) { // if DB has a Screw it will be removed from temp
                    temp.remove();
                }
            }
            if (!screwList.isEmpty()) {
                screwRepository.saveAll(screwList);
            }
        } else { // if DB is empty add the file
            screwRepository.saveAll(screwList);
        }
    }

    /**
     * A Creator method to make Screw Objects
     *
     * @param filePath String path of create file
     * @return List<Screw> A list of Screws
     */
    private List<Screw> createScrews(String filePath) {
        File createFile = new File(filePath);
        List<Screw> screwList = new ArrayList<>();

        try {

            Scanner fileIn = new Scanner(createFile);

            String temp;
            String[] tempArr;
            Screw s1;
            fileIn.nextLine(); // skip header line
            String imgName = "";

            while (fileIn.hasNextLine()) {
                temp = fileIn.nextLine();
                tempArr = temp.split(",");
                s1 = new Screw();
                s1.setAccessId(Long.parseLong(tempArr[0]));
                s1.setName(tempArr[1]);
                s1.setHeadType(tempArr[2]);
                s1.setGauge(tempArr[3]);
                s1.setThreadsPerInch(tempArr[4]);
                s1.setShaftLen(tempArr[5]);
                s1.setPrice(Double.valueOf(tempArr[6]));
                s1.setCategory(tempArr[7]);
                screwList.add(s1);
                // Name + access id
                imgName = tempArr[1] + " " + tempArr[0];

                s1.setImgPath(getImg(imgName));
            }

            fileIn.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        return screwList;
    }

    public String getImg(String imgName) {
        // frontend/src/assets/ScrewImg/Name accessID.jpg
        String path = "assets/ScrewImg/" + imgName + ".jpg";
        return path;
    }

}