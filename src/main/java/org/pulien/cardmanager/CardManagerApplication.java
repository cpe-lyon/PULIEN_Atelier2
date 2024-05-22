package org.pulien.cardmanager;

import jakarta.servlet.Filter;
import org.pulien.cardmanager.authentification.JwtFilter;
import org.pulien.cardmanager.authentification.JwtUtil;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CardManagerApplication {

	public static void main(String[] args) {
		SpringApplication.run(CardManagerApplication.class, args);
	}

	@Bean
	public JwtUtil jwtUtil() {
		return new JwtUtil();
	}
}
