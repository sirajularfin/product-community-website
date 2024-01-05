package com.project.files.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.files.entities.User;
import com.project.files.service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

	@Autowired
	private UserService service;

	@GetMapping("/users")
	public ResponseEntity<Object> fetchAllUsers() {
		try {
			return new ResponseEntity<>(service.getUsers(), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/users/{id}")
	public ResponseEntity<Object> fetchUserById(@PathVariable String id) {
		try {
			return new ResponseEntity<>(service.getUserById(Integer.parseInt(id)), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@DeleteMapping("/users/{id}") 
	public ResponseEntity<Object> deleteUserById(@PathVariable String id) {
		try {
			service.deleteUserById(Integer.parseInt(id));
			return new ResponseEntity<>( HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

//	== Registration ==

	@PostMapping("/register")
	public ResponseEntity<Object> registerUser(@RequestBody User user) {
		try {
			String email = user.getEmail();
			if (service.fetchUserByEmailId(email) != null) {
				throw new Exception("User with the same email address already exits");
			}
			return new ResponseEntity<>(service.saveUser(user), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

//	== Login & Logout ==

	@GetMapping("/login/{userId}")
	public ResponseEntity<Object> getUserById(@PathVariable String userId) {
		try {
			return new ResponseEntity<>(service.fetchUserById(Integer.parseInt(userId)), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PostMapping("/login")
	public ResponseEntity<Object> loginUser(@RequestBody User user) {
		try {
			String email = user.getEmail();
			String pass = user.getPaswd();
			User userObj = service.fetchUserByEmailIdAndPassword(email, pass);
			if (userObj == null) {
				throw new Exception("Wrong credentials");
			}
			userObj.setLoginStatus(true);
			return new ResponseEntity<>(service.saveUser(userObj), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PutMapping("/login")
	public ResponseEntity<Object> logOutUser(@RequestBody User user) {
		try {
			return new ResponseEntity<>(service.saveUser(user), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}