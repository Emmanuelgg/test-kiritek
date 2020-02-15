package com.javainuse.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity // This tells Hibernate to make a table out of this class
public class Review {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Integer id;

  private Integer idBook;

  @Lob
  private String review;

  public Integer getId() {
    return id;
  }
  public void setId(Integer id) {
    this.id = id;
  }

  public Integer getIdBook() {
    return idBook;
  }

  public void setIdBook(Integer idBook) {
    this.idBook = idBook;
  }


  public String getReview() {
    return review;
  }

  public void setReview(String review) {
    this.review = review;
  }
}