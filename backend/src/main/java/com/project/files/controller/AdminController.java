package com.project.files.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.files.entities.Admin;
import com.project.files.service.AdminService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AdminController {

	@Autowired
	private AdminService service;

	@GetMapping("/admin/{username}")
	public ResponseEntity<Object> fetchAdminByUsername(@PathVariable String username) {
		try {
			return new ResponseEntity<>(service.fetchAdminByUsername(username), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PostMapping("/admin")
	public ResponseEntity<Object> fetchAdminByNameAndPassword(@RequestBody Admin admin) {
		try {
			String username = admin.getUsername();
			String password = admin.getPassword();
			Admin adminObj = service.fetchAdminByNameAndPassword(username, password);
			if(adminObj == null)
					throw new Exception("Bad Credentials");
			adminObj.setLoginStatus(true);
			service.saveUser(adminObj);
			return new ResponseEntity<>(adminObj, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@PutMapping("/admin")
	public ResponseEntity<Object> updateInfo(@RequestBody Admin admin) {
		try {
			return new ResponseEntity<>(service.updateUser(admin), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
