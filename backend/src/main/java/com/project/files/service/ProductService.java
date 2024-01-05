package com.project.files.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.files.entities.Product;
import com.project.files.repository.ProductRepository;

@Service
public class ProductService {

	@Autowired
	private ProductRepository repo;

	public List<Product> fetchProducts() {
		return repo.findAll();
	}
	
	public Optional<Product> fetchProductById(Integer id) {
		return repo.findById(id);
	}

	public List<Product> fetchProductsBySearchText(String search) {
		return repo.findByProductNameOrCodeOrBrand(search);

	}

	public Product saveProduct(Product product) {
		return repo.save(product);
	}
	
	public Integer fetchProductByProductCode(String code) {
		return repo.findByProductCode(code);
	}
	
	public void deleteProduct(Integer productId) {
		repo.deleteById(productId);
	}
}
