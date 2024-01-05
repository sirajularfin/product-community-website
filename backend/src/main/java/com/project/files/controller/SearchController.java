package com.project.files.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.files.entities.Product;
import com.project.files.service.ProductService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class SearchController {

	@Autowired
	private ProductService service;

//	== Search API ==

	@GetMapping("/search/{search}")
	public ResponseEntity<Object> fetchProductbySearchText(@PathVariable String search) {
		try {
			return new ResponseEntity<>(service.fetchProductsBySearchText(search), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
//	== Request Review API == 
	@PostMapping("/request")
	public ResponseEntity<Object> requestRreviews(@RequestBody Product product) {
		String code = product.getCode();

		try {
			Integer productId = service.fetchProductByProductCode(code);
			if (productId == null)
				throw new Exception("Proudct not found");
			return new ResponseEntity<>(productId, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
