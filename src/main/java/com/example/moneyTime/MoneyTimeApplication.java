package com.example.moneyTime;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class MoneyTimeApplication {

	public static void main(String[] args) {
		SpringApplication.run(MoneyTimeApplication.class, args);
	}
}
