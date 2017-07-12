package com.wissen.mts.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wissen.mts.model.User;
import com.wissen.mts.repository.UserRepository;

@Service("userService")
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;

	public List<User> findAllUsers() {
		return userRepository.findAll();
	}

	public User findById(long id) {
		return userRepository.findOne((int) id);
	}

	public User findByName(String name) {
		return null;
	}

	public void saveUser(User user) {
		userRepository.save(user);
	}

	public void updateUser(User user) {
		userRepository.save(user);
	}

	public void deleteUserById(long id) {
		userRepository.delete((int) id);
	}

	public boolean isUserExist(User user) {
		return findByName(user.getName()) != null;
	}

	public void deleteAllUsers() {
		//
	}

}