package edu.ben.labs.lab4.lab4.service;

import edu.ben.labs.lab4.lab4.model.Review;

import javax.persistence.EntityManager;
import java.util.List;

public interface ReviewService {

    List getReviewsForScrew(EntityManager entityManager, String screwId);

    Review addReviewToProduct(String screwId, String userEmail, String content);
}
