package com.wissen.mts.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wissen.mts.model.Account;

@Repository
public interface AccountRepository extends JpaRepository<Account, String>{
	
	List<Account> findByBalanceGreaterThan(double price);

}
