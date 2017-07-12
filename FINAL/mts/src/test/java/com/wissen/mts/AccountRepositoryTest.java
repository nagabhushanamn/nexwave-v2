package com.wissen.mts;

import static org.junit.Assert.assertEquals;

import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.wissen.mts.model.Account;
import com.wissen.mts.repository.AccountRepository;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class)
public class AccountRepositoryTest {

	@Autowired
	private AccountRepository accountRepository;

	@Before
	public void setUp() {
		accountRepository.deleteAll();

		Account fromAccount = new Account();
		fromAccount.setNum("1");
		fromAccount.setBalance(1000.00);

		Account toAccount = new Account();
		toAccount.setNum("2");
		toAccount.setBalance(1000.00);

		accountRepository.save(fromAccount);
		accountRepository.save(toAccount);
	}

	@Test
	public void loadAccounts() {
		List<Account> accounts = (List<Account>) accountRepository.findAll();
		assertEquals("all accounts", 2, accounts.size());
	}

	@Test
	public void CRUD() {
		Account newAccount = new Account();
		newAccount.setNum("3");
		newAccount.setBalance(2000.00);
		accountRepository.save(newAccount);

		Account account = accountRepository.findOne("3");
		assertEquals("balance equals", 2000.0, account.getBalance(), 0.0);
	}

}
