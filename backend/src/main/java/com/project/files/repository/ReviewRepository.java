package com.project.files.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.project.files.entities.Review;

public interface ReviewRepository extends JpaRepository<Review, Integer> {

	@Query(value = "SELECT * FROM Review WHERE product_id = :product", nativeQuery = true)
	public List<Review> findByProductId(Integer product);

	@Query(value = "SELECT COUNT(*), AVG(rating) FROM Review WHERE product_id = :product GROUP BY product_id", nativeQuery = true)
	public List<Object> countAverageRatingAndTotalReviews(Integer product);
}
