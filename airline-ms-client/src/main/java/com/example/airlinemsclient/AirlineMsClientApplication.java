package com.example.airlinemsclient;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.hystrix.EnableHystrix;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@EnableEurekaClient
@ComponentScan("com")
@EntityScan("com")
@EnableHystrix
public class AirlineMsClientApplication {

	public static void main(String[] args) {
		SpringApplication.run(AirlineMsClientApplication.class, args);
	}

}
