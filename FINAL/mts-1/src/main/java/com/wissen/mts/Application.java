package com.wissen.mts;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

import com.wissen.mts.service.TxrService;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {

		ConfigurableApplicationContext context = SpringApplication.run(Application.class, args);

		try {
			TxrService txrService = context.getBean(TxrService.class);
			txrService.doTxr(900.00, "1", "2");
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}

	}
}
