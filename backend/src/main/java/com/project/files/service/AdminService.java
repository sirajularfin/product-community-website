package com.project.files.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.files.entities.Admin;
import com.project.files.repository.AdminRespository;

@Service
public class AdminService {

	@Autowired
	private AdminRespository repo;
	
	public Admin saveUser(Admin admin) {
		return repo.save(admin);
	}
	
	public Optional<Admin> fetchAdminByUsername(String username) {
		return repo.findById(username);
	}
	
	public Admin fetchAdminByNameAndPassword(String username, String password) {
		return repo.fetchAdminByNameAndPassword(username, password);
	}
	
	public Admin updateUser(Admin admin) {
		return repo.save(admin);
	}
}
