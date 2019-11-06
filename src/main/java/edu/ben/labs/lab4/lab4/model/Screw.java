package edu.ben.labs.lab4.lab4.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity // This is telling about DB to make a entity modeled after this class
public class Screw {


    @Id // @Id tag shows its is a id
    @GeneratedValue(strategy = GenerationType.AUTO)
    //@GeneratedValue will auto generate a ID when this object goes into DB
    private long id;
    // A filler String till more concrete ideas are added
    private String content = "";

    public Screw() {

    }

    public Screw(String content) {
        this.content = content;
    }

    public Screw(long id, String content) {
        this.id = id;
        this.content = content;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    @Override
    public String toString() {
        return "Screw{" +
                "id=" + id +
                ", content='" + content + '\'' +
                '}';
    }
}
