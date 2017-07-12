package com.wissen.mts.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import com.wissen.mts.model.Account;

@Repository
//@RepositoryRestResource(collectionResourceRel = "accounts", path = "accounts")
public interface AccountRepository extends JpaRepository<Account, String>{
	
	List<Account> findByBalanceGreaterThan(double price);

}
