package com.project.files.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.files.entities.User;
import com.project.files.repository.UserRepository;

@Service
public class UserService {
	@Autowired
	private UserRepository repo;

	public List<User> getUsers() {
		return repo.findAll();
	}
	
	public Optional<User> getUserById(Integer id) {
		return repo.findById(id);
	}

	public User saveUser(User user) {
		return repo.save(user);
	}
	
	public void deleteUserById(Integer id) {
		repo.deleteById(id);
	}

	public User fetchUserByEmailId(String email) {
		return repo.finByEmailId(email);
	}

	public Optional<User> fetchUserById(Integer userId) {
		return repo.findById(userId);
	}

	public User fetchUserByEmailIdAndPassword(String email, String pass) {
		return repo.findByEmailIdAndPassword(email, pass);
	}

	public Long fetchTotalRegisteredUsers() {
		return repo.count();
	}

	public Long fetchTotalOnlineUsers() {
		return repo.countOnlineUsers();
	}
}