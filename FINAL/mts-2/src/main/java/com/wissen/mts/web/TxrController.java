package com.wissen.mts.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.wissen.mts.service.AccountBalanceException;
import com.wissen.mts.service.TxrService;

@RestController
@RequestMapping("/api/txr")
public class TxrController {

	@Autowired
	private TxrService txrService;

	@RequestMapping(method = RequestMethod.POST)
	public TxrResponse txr(@RequestBody TxrRequest request) {
		boolean b = txrService.doTxr(request.getAmount(), request.getFromAccNum(), request.getToAccNum());
		TxrResponse response = new TxrResponse();
		response.setMessage(b?"Txr success":"Txr Failure");
		return response;
	}

	@ExceptionHandler(value = { AccountBalanceException.class })
	public TxrResponse TxrFailHandler(Exception e) {
		TxrResponse response = new TxrResponse();
		response.setMessage(e.getMessage());
		return response;
	}

}
