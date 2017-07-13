package com.wissen.mts;

import static org.junit.Assert.assertTrue;

import javax.transaction.Transactional;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.wissen.mts.service.TxrService;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class)
public class TxrServiceIntegrtionTest {

	@Autowired
	private TxrService txrService;

	@Transactional
	@Test
	public void txrSuccess() {
		boolean status = txrService.doTxr(100.00, "1", "2");
		assertTrue(status);
	}

}
