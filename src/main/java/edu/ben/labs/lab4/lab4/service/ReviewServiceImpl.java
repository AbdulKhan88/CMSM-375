package edu.ben.labs.lab4.lab4.service;

import edu.ben.labs.lab4.lab4.model.Review;
import edu.ben.labs.lab4.lab4.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import java.util.List;

@Service
@Transactional
public class ReviewServiceImpl implements ReviewService {
    @Autowired
    ReviewRepository reviewRepository;

    @Override
    @Query(value = "SELECT * FROM review u WHERE screwId = :screwId",
            nativeQuery = true)
    public List<Review> getReviewsForScrew(EntityManager entityManager, @Param("screwId") String screwId) {

        String queryStr = "SELECT review_id FROM review AS r WHERE screw_ID = ?1";
        /*try {
            TypedQuery<Review> query = entityManager.createQuery(queryStr, Review.class);
           // Query query = entityManager.createNativeQuery(queryStr);
            query.setParameter(1, screwId);

            List<Review> results = query.getResultList();

            for (Review c : results) {
                System.out.println(c.toString());
            }

            return query.getResultList();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }*/
        return null;
    }

    @Override
    public Review addReviewToProduct(String screwId, String userEmail, String content) {
        Review temp = new Review();
        temp.setScrewId(Long.parseLong(screwId));
        temp.setUserEmail(userEmail);
        temp.setContent(content);
        reviewRepository.save(temp);
        return temp;
    }
}
