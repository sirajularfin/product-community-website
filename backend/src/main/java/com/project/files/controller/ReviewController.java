package com.project.files.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.files.entities.Review;
import com.project.files.service.ReviewService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ReviewController {

	@Autowired
	private ReviewService service;
	
	@GetMapping("/reviews")
	public ResponseEntity<Object> fetchAllReviews() {
		try {
			return new ResponseEntity<>(service.getAllReviews(), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/reviews/{product}")
	public ResponseEntity<Object> fetchReviewsByProductId(@PathVariable String product) {
		try {
			return new ResponseEntity<>(service.findReviewsByProductId(Integer.parseInt(product)), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PostMapping("/reviews")
	public ResponseEntity<Object> saveReviews(@RequestBody Review review) {
		try {
			return new ResponseEntity<>(service.addReview(review), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@DeleteMapping("/reviews/{id}")
	public ResponseEntity<Object> deleteReviews(@PathVariable String id) {
		try {
			service.deleteReview(Integer.parseInt(id));
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
