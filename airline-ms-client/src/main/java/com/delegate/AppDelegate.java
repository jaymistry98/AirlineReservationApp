package com.delegate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.context.annotation.Bean;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.entity.Feedback;
import com.entity.Flights;
import com.entity.Offers;
import com.entity.Promotion;
import com.entity.User;
import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;

@Service
public class AppDelegate {
	@LoadBalanced
	@Bean
	public RestTemplate template() {
		return new RestTemplate();
	};
	@Autowired
	public RestTemplate template;
	
	/*
	@HystrixCommand(fallbackMethod = "callonFail")
	public String loadUsers() {
		String data= template.exchange("http://emp-service/mainapp/loadall"
				,HttpMethod.GET
				,null
				,new ParameterizedTypeReference<String>() {
				}).getBody();
		
		return data;
	}
	
	*/
	
	//FLIGHT
	
	
	public String getAllFlights() {
		String data= template.exchange("http://airline-ms-service-main/api/v1/allflight"
				,HttpMethod.GET
				,null
				,new ParameterizedTypeReference<String>() {
				}).getBody();
		
		return data;
	}
	
	
	public Flights createFlight(Flights flight) {
		Flights flight2 = template.exchange("http://airline-ms-service-main/api/v1/createflight"
				,HttpMethod.POST
				,new HttpEntity<Flights>(flight)
				,Flights.class)
				.getBody();
		
		return flight2;
	}
	
	
	public Flights getTicketData(Long id) {
		Flights data= template.exchange("http://airline-ms-service-main/api/v1/ticketdata/"+id
				,HttpMethod.GET
				,null
				,Flights.class)
				.getBody();
		
		return data;
	}
	
	
	public Flights updateFlight(Flights flight) {
		Flights flight2 = template.exchange("http://airline-ms-service-main/api/v1/updateflight"
				,HttpMethod.PUT
				,new HttpEntity<Flights>(flight)
				,Flights.class)
				.getBody();
		
		return flight2;
	}
	
	
	public ResponseEntity<HttpStatus> deleteFlight(Long id) {
		ResponseEntity<HttpStatus> http= template.exchange("http://airline-ms-service-main/api/v1/deleteflight/"+id
				,HttpMethod.DELETE
				,null
				,ResponseEntity.class)
				.getBody();
		
		return http;
	}
	
	
	//USER
	
	
	public String getAllUsers() {
		String data= template.exchange("http://airline-ms-service-main/api/v1/alluser"
				,HttpMethod.GET
				,null
				,new ParameterizedTypeReference<String>() {
				}).getBody();
		
		return data;
	}
	
	
	public User createUser(User user) {
		User data= template.exchange("http://airline-ms-service-main/api/v1/createuser"
				,HttpMethod.POST
				,new HttpEntity<User>(user)
				,User.class)
				.getBody();
		
		return data;
	}
	
	
	public User updateOffer(User user) {
		User data= template.exchange("http://airline-ms-service-main/api/v1/updateuser"
				,HttpMethod.PUT
				,new HttpEntity<User>(user)
				,User.class)
				.getBody();
		
		return data;
	}
	
	
	//OFFER
	
	
	public String getAllOffers() {
		String data= template.exchange("http://airline-ms-service-main/api/v1/alloffers"
				,HttpMethod.GET
				,null
				,new ParameterizedTypeReference<String>() {
				}).getBody();
		
		return data;
	}
	
	
	public Offers createOffer(Offers offer) {
		Offers data= template.exchange("http://airline-ms-service-main/api/v1/createoffer"
				,HttpMethod.POST
				,new HttpEntity<Offers>(offer)
				,Offers.class)
				.getBody();
		
		return data;
	}
	
	
	public Offers getOfferById(int id) {
		Offers data= template.exchange("http://airline-ms-service-main/api/v1/offerbyid/"+id
				,HttpMethod.GET
				,null
				,Offers.class)
				.getBody();
		
		return data;
	}
	
	
	public Offers OfferUpdateOffer(Offers offer) {
		Offers data= template.exchange("http://airline-ms-service-main/api/v1/updateoffer"
				,HttpMethod.PUT
				,new HttpEntity<Offers>(offer)
				,Offers.class).getBody();
		
		return data;
	}
	
	
	public ResponseEntity<HttpStatus> deleteOffer(int id) {
		ResponseEntity<HttpStatus> http= template.exchange("http://airline-ms-service-main/api/v1/deleteoffer/"+id
				,HttpMethod.DELETE
				,null
				,ResponseEntity.class).getBody();
		
		return http;
	}
	
	
	//FEEDBACK
	
	
	public Feedback createFeedback(Feedback feedback) {
		Feedback data= template.exchange("http://airline-ms-service-main/api/v1/createfeedback"
				,HttpMethod.POST
				,new HttpEntity<Feedback>(feedback)
				,Feedback.class)
				.getBody();
		
		return data;
	}
	
	
	public String getAllFeedbacks() {
		String data= template.exchange("http://airline-ms-service-main/api/v1/allfeedback"
				,HttpMethod.GET
				,null
				,new ParameterizedTypeReference<String>() {
				}).getBody();
		
		return data;
	}
			
		
	//PROMOTION 
	
	
	public String getAllPromotions() {
		String data= template.exchange("http://airline-ms-service-main/api/v1/allpromotions"
				,HttpMethod.GET
				,null
				,new ParameterizedTypeReference<String>() {
				}).getBody();
		
		return data;
	}
	
	
	public Promotion getPromotionById(int id) {
		Promotion data= template.exchange("http://airline-ms-service-main/api/v1/promotionbyid/"+id
				,HttpMethod.GET
				,null
				,Promotion.class)
				.getBody();
		
		return data;
	}
	
	
	public Promotion createPromotion(Promotion promo) {
		Promotion data= template.exchange("http://airline-ms-service-main/api/v1/createPromotion"
				,HttpMethod.POST
				,new HttpEntity<Promotion>(promo)
				,Promotion.class)
				.getBody();
		
		return data;
	}
	
	
	public Promotion updatePromotion(Promotion promotion) {
		Promotion data= template.exchange("http://airline-ms-service-main/api/v1/updatepromotion"
				,HttpMethod.PUT
				,new HttpEntity<Promotion>(promotion)
				,Promotion.class)
				.getBody();
		
		return data;
	}
	
	
	public ResponseEntity<HttpStatus> deletePromotion(int id) {
		ResponseEntity<HttpStatus> http= template.exchange("http://airline-ms-service-main/api/v1/deletepromotion/"+id
				,HttpMethod.DELETE
				,null
				,ResponseEntity.class)
				.getBody();
		
		return http;
	}
		
	
}
