package com.project.files.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.project.files.entities.User;

public interface UserRepository extends JpaRepository<User, Integer> {

	@Query(value = "SELECT * FROM User WHERE email = :email", nativeQuery = true)
	public User finByEmailId(String email);
	
	@Query(value = "SELECT * FROM User WHERE email = :email AND paswd = :pass", nativeQuery = true)
	public User findByEmailIdAndPassword(String email, String pass);
	
	@Query(value="SELECT COUNT(*) FROM User WHERE login_status = 1", nativeQuery = true)
	public Long countOnlineUsers();
}
