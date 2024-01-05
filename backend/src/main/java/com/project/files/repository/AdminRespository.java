package com.project.files.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.project.files.entities.Admin;

public interface AdminRespository extends JpaRepository<Admin, String> {

	@Query(value = "SELECT * FROM Admin WHERE username = :username AND password = :password", nativeQuery = true)
	public Admin fetchAdminByNameAndPassword(String username, String password);
}
