/*
package edu.ben.labs.lab4.lab4.model;

import javax.persistence.*;

@Entity
public class Review {

    @Id // @Id tag shows its is a id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long reviewId;

    private String author;

    private long screwId;

    private String content; // should limit to 255

    public Review() {

    }

    public long getReviewId() {
        return reviewId;
    }

    public void setReviewId(long reviewId) {
        this.reviewId = reviewId;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public long getScrewId() {
        return screwId;
    }

    public void setScrewId(long screwId) {
        this.screwId = screwId;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    @Override
    public String toString() {
        return "Review{" +
                "reviewId=" + reviewId +
                ", author='" + author + '\'' +
                ", screwId=" + screwId +
                ", content='" + content + '\'' +
                '}';
    }
}
*/
