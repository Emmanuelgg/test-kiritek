package com.javainuse.repository;

import org.springframework.data.repository.CrudRepository;
import java.util.List;

import com.javainuse.model.Review;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface ReviewRepository extends CrudRepository<Review, Integer> {
    List<Review> findByIdBook(Integer idBook);
}