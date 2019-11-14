package edu.ben.labs.lab4.lab4.model;

import javax.persistence.*;
import java.util.Objects;

/**
 * A class for a Screw object
 */
@Entity // This is telling about DB to make a entity modeled after this class
public class Screw {

    // EX: 6-32 X 1 1/2
    // #6 diameter, 32 = threads per in, 1 1/2 = length

    @Id // @Id tag shows its is a id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = "screw_generator", sequenceName = "screw_seq", allocationSize = 10)
    //@GeneratedValue will auto generate a ID when this object goes into DB
    /**
     * Id of screw (auto generated)
     */
    private long id;
    /**
     * ID to see if screw is unique
     */
    private long accessId;
    /**
     * Name of the Screw
     */
    private String name = "";
    /**
     * The headType of Screw (flathead, hexagon, ect, ect)
     */
    private String headType;
    /**
     * the price the Screw
     */
    private Double price;
    /**
     * Category of the Screw (what it is mostly used for)
     */
    private String category;
    /**
     * Screw`s gauge headType
     */
    private String gauge;
    /**
     * Amount of threads per inch
     */
    private String threadsPerInch;
    /**
     * the size of the screw from below the head
     */
    private String shaftLen;

    /**
     * path to the screw`s img
     */
    private String imgPath = "te";

    /**
     * Constructor with no params
     */
    public Screw() {

    }

    /**
     * Constructor all params
     */
    public Screw(String name, String headType, String gauge, String threadsPerInch, String shaftLen, Double price, String category) {
        this.name = name;
        this.headType = headType;
        this.gauge = gauge;
        this.threadsPerInch = threadsPerInch;
        this.shaftLen = shaftLen;
        this.price = price;
        this.category = category;
    }

    /**
     * Constructor with just name
     */
    public Screw(String name) {
        this.name = name;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getHeadType() {
        return headType;
    }

    public void setHeadType(String headType) {
        this.headType = headType;
    }

    public String getGauge() {
        return gauge;
    }

    public void setGauge(String gauge) {
        this.gauge = gauge;
    }

    public String getThreadsPerInch() {
        return threadsPerInch;
    }

    public void setThreadsPerInch(String threadsPerInch) {
        this.threadsPerInch = threadsPerInch;
    }

    public String getShaftLen() {
        return shaftLen;
    }

    public void setShaftLen(String shaftLen) {
        this.shaftLen = shaftLen;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }



    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Screw screw = (Screw) o;
        return
                accessId == screw.accessId &&
                        Objects.equals(name, screw.name) &&
                        Objects.equals(headType, screw.headType) &&
                        Objects.equals(price, screw.price) &&
                        Objects.equals(category, screw.category) &&
                        Objects.equals(gauge, screw.gauge) &&
                        Objects.equals(threadsPerInch, screw.threadsPerInch) &&
                        Objects.equals(shaftLen, screw.shaftLen);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, accessId, name, headType, price, category, gauge, threadsPerInch, shaftLen);
    }

    public long getAccessId() {
        return accessId;
    }

    public void setAccessId(long accessId) {
        this.accessId = accessId;
    }

    @Override
    public String toString() {
        return "Screw{" +
                "id=" + id +
                ", accessId=" + accessId +
                ", name='" + name + '\'' +
                ", headType='" + headType + '\'' +
                ", price=" + price +
                ", category='" + category + '\'' +
                ", gauge='" + gauge + '\'' +
                ", threadsPerInch='" + threadsPerInch + '\'' +
                ", shaftLen='" + shaftLen + '\'' +
                '}';
    }

    public String getImgPath() {
        return imgPath;
    }

    public void setImgPath(String imgPath) {
        this.imgPath = imgPath;
    }
}
