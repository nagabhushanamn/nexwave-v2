package com.wissen.mts.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.wissen.mts.model.User;

//@CrossOrigin(origins="*")
@RepositoryRestResource(path = "users")
public interface UserRepository extends JpaRepository<User, Integer> {

}
