package edu.ben.labs.lab4.lab4;

import edu.ben.labs.lab4.lab4.model.Screw;
import edu.ben.labs.lab4.lab4.repository.ScrewRepository;
import edu.ben.labs.lab4.lab4.repository.ScrewRepositoryImpl;
import edu.ben.labs.lab4.lab4.service.ScrewService;
import org.flywaydb.core.Flyway;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.flywaydb.core.Flyway;

import java.util.List;

@SpringBootApplication
public class Lab4Application {
    
    private final String URL = "jdbc:mysql://localhost:3306/lab4";
    private final String USER = "root";
    private final String PASS = "root";

    // Logger to just log things and display
    private static final Logger log = LoggerFactory.getLogger(Lab4Application.class);

    public static void main(String[] args) {
        SpringApplication.run(Lab4Application.class, args);
    }

    @Bean
    // Bc this is a CommandLineRunner it will run after Spring runs
    public CommandLineRunner demo() {
        return (args) -> {
            // This runs every time this class is made so it will add the same object over and over
            // i made this to test if i can create from backend
            // Add a object to DB
            // Adds screw list into DB after spring is run

            /*Flyway flyway = Flyway.configure().dataSource(URL, USER, PASS).load();
            flyway.repair();
            flyway.baseline();
            flyway.migrate();*/

           /* //repo.addScrewList();
           // log.info("Screws found with findAll():");
          // log.info("-------------------------------");
            for (Screw s : repo.getAllScrews()) {
               // log.info(s.toString());
            }
          //  log.info("");

            // for (Customer bauer : repository.findByLastName("Bauer")) {
            // 	log.info(bauer.toString());
            // }*/
            log.info("");
        };
    }
}
