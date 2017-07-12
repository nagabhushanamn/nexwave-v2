package com.wissen.mts.repository;

import org.springframework.data.repository.CrudRepository;

import com.wissen.mts.model.Account;

public interface AccountRepository extends CrudRepository<Account, String> {

//	Account load(String num);
//
//	void update(Account account);

}
