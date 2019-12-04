package edu.ben.labs.lab4.lab4.repository;

import edu.ben.labs.lab4.lab4.model.Review;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ReviewRepository extends CrudRepository<Review, Long> {

    @Query(value = "SELECT * FROM review u WHERE screw_id = ?1",
            nativeQuery = true)
    List<Review> getReviewsForScrewID(Long screwId);

}
