package com.wissen.mts.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wissen.mts.model.Account;
import com.wissen.mts.repository.AccountRepository;

@Service("txrService")
public class TxrServiceImpl implements TxrService {

	private AccountRepository accountRepo;

	@Autowired
	public TxrServiceImpl(AccountRepository accountRepo) {
		super();
		this.accountRepo = accountRepo;
	}

	@Override
	public boolean doTxr(double amount, String fromAccNum, String toAccNum) {

		Account fromAccount = accountRepo.findOne(fromAccNum);
		Account toAccount = accountRepo.findOne(toAccNum);

		if (fromAccount.getBalance() >= amount) {
			fromAccount.setBalance(fromAccount.getBalance() - amount);
			toAccount.setBalance(toAccount.getBalance() + amount);
			accountRepo.save(fromAccount);
			accountRepo.save(toAccount);
		} else {
			throw new AccountBalanceException("insufficient balance in account");
		}

		return true;

	}

}
