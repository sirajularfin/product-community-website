package com.project.files.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.project.files.constants.Stats;
import com.project.files.service.ReviewService;
import com.project.files.service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class StatsController {

	@Autowired
	private UserService userService;

	@Autowired
	private ReviewService reviewService;

	@GetMapping("/stats/{text}")
	public ResponseEntity<Object> fetchStats(@PathVariable String text) {

		if (text.equalsIgnoreCase(Stats.POSTS.toString()))
			return new ResponseEntity<>(reviewService.fetchTotalReviews(), HttpStatus.OK);
		
		else if (text.equalsIgnoreCase(Stats.ONLINE.toString()))
			return new ResponseEntity<>(userService.fetchTotalOnlineUsers(), HttpStatus.OK);
		
		else if (text.equalsIgnoreCase(Stats.MEMBERS.toString()))
			return new ResponseEntity<>(userService.fetchTotalRegisteredUsers(), HttpStatus.OK);

		return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

	}
	
	@GetMapping("/count/{product}")
	public ResponseEntity<Object> countAverageRatingAndTotalReviews(@PathVariable String product) {
		try {
			return new ResponseEntity<>(
					reviewService.countAverageRatingAndTotalReviews(Integer.parseInt(product)), HttpStatus.OK);
		}
		catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
