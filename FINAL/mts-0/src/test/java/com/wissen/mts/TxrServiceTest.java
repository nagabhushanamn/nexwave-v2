package com.wissen.mts;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import static org.junit.Assert.*;

//import static org.hamcrest.CoreMatchers.*;

import com.wissen.mts.model.Account;
import com.wissen.mts.repository.AccountRepository;
import com.wissen.mts.service.AccountBalanceException;
import com.wissen.mts.service.TxrService;
import com.wissen.mts.service.TxrServiceImpl;

import static org.mockito.Mockito.*;

public class TxrServiceTest {

	private TxrService txrService;

	@Mock
	private AccountRepository accountRepo;

	String fromAccNum = "1";
	String toAccNum = "2";

	Account fromAccount = new Account();
	Account toAccount = new Account();

	@Before
	public void setUp() {

		// accountRepo = mock(AccountRepository.class);
		MockitoAnnotations.initMocks(this);

		txrService = new TxrServiceImpl(accountRepo);

		fromAccount.setNum(fromAccNum);
		fromAccount.setBalance(1000.00);

		toAccount.setNum(toAccNum);
		toAccount.setBalance(1000.00);
	}

	@Test
	public void txrSuccess() {

		when(accountRepo.findOne(fromAccNum)).thenReturn(fromAccount);
		when(accountRepo.findOne(toAccNum)).thenReturn(toAccount);

		boolean status = txrService.doTxr(100.00, fromAccNum, toAccNum);
		assertTrue(status);
		assertEquals(900.0, fromAccount.getBalance(), 0.0);
		assertEquals(1100.0, toAccount.getBalance(), 0.0);

		verify(accountRepo).findOne(fromAccNum);
		verify(accountRepo).findOne(toAccNum);

	}

	@Test(expected = AccountBalanceException.class)
	public void txrFail() {

		when(accountRepo.findOne(fromAccNum)).thenReturn(fromAccount);
		try {
			txrService.doTxr(2000, fromAccNum, toAccNum);
		} catch (AccountBalanceException e) {
			// fail(e.getMessage());
			throw e;

		}
		verify(accountRepo).findOne(fromAccNum);

	}

}
