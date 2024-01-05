package com.project.files.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.project.files.entities.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> {

	@Query(value = "SELECT * FROM Product WHERE name LIKE %:search% OR code LIKE %:search% OR brand LIKE %:search%", nativeQuery = true)
	public List<Product> findByProductNameOrCodeOrBrand(String search);
	
	@Query(value="SELECT id FROM Product WHERE code = :code", nativeQuery = true)
	public Integer findByProductCode(String code);
}
