package com.project.files.entities;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Admin {
	@Id
	private String username;
	private String password;
	private Boolean loginStatus;

	public Admin() {
		this.loginStatus = false;
	}

	public Admin(String username, String password, Boolean loginStatus) {
		this.username = username;
		this.password = password;
		this.loginStatus = loginStatus;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Boolean getLoginStatus() {
		return loginStatus;
	}

	public void setLoginStatus(Boolean loginStatus) {
		this.loginStatus = loginStatus;
	}

	@Override
	public String toString() {
		return "Admin [username=" + username + ", password=" + password + ", loginStatus=" + loginStatus + "]";
	}

}
