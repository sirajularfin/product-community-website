package com.project.files.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.project.files.entities.Review;
import com.project.files.repository.ReviewRepository;

@Service
public class ReviewService {

	@Autowired
	private ReviewRepository repo;
	
	public List<Review> getAllReviews() {
		return repo.findAll(Sort.by("isApproved"));
	}

	public List<Review> findReviewsByProductId(Integer product) {
		return repo.findByProductId(product);
	}

	public Review addReview(Review review) {
		return repo.save(review);
	}

	public Long fetchTotalReviews() {
		return repo.count();
	}

	public List<Object> countAverageRatingAndTotalReviews(Integer productId) {
		return repo.countAverageRatingAndTotalReviews(productId);
	}

	public void deleteReview(Integer id) {
		repo.deleteById(id);
	}

}
