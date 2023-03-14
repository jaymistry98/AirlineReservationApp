package com.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.delegate.AppDelegate;
import com.entity.Feedback;
import com.entity.Flights;
import com.entity.Offers;
import com.entity.Promotion;
import com.entity.User;
 
@RestController
@RequestMapping("/flightapp")
@CrossOrigin("*")
public class AppController {
	@Autowired
	private AppDelegate dao;
	
	/*
	@GetMapping("/loademp")
	public String loadAll(

	) {
		return dao.loadUsers();
	}
	*/
	
	//FLIGHT
	
	@GetMapping("/allflight")
	private String  getAllFlights() {
		return dao.getAllFlights();
	}
	
	@PostMapping("/createflight")
	private Flights createFlight(@RequestBody Flights flight) {
		return dao.createFlight(flight);
	}
	
	@GetMapping("/ticketdata/{id}")
	private Flights getTicketData(@PathVariable Long id) {
		return dao.getTicketData(id);
	}
	
	@PutMapping("/updateflight")
	private Flights updateFlight(@RequestBody Flights flight) {
		return dao.updateFlight(flight);
	}
	
	@DeleteMapping("/deleteflight/{id}")
	private ResponseEntity<HttpStatus> deleteFlight(@PathVariable Long id) {
		return dao.deleteFlight(id);
	}
	
	
	//USER
	
	@GetMapping("/alluser")
	private String getAllUsers() {
		return dao.getAllUsers();
	}
	
	@PostMapping("/createuser")
	private User createUser(@RequestBody User user) {
		return dao.createUser(user);
	}
	
	@PutMapping("/updateuser")
	private User updateOffer(@RequestBody User user) {
		return dao.updateOffer(user);
	}
	
	
	//OFFER
	
	@GetMapping("/alloffers")
	private String getAllOffers() {
		return dao.getAllOffers();
	}
	
	@PostMapping("/createoffer")
	private Offers createOffer(@RequestBody Offers offer) {
		return dao.createOffer(offer);
	}
	
	@GetMapping("/offerbyid/{id}")
	private Offers getOfferById(@PathVariable int id) {
		return dao.getOfferById(id);
	}
	
	@PutMapping("/updateoffer")
	private Offers OfferUpdateOffer(@RequestBody Offers offer) {
		return dao.OfferUpdateOffer(offer);
	}
	
	@DeleteMapping("/deleteoffer/{id}")
	private ResponseEntity<HttpStatus> deleteOffer(@PathVariable int id) {
		return dao.deleteOffer(id);
	}
	
	
	//FEEDBACK
	
	@PostMapping("/createfeedback")
	private Feedback createFeedback(@RequestBody Feedback feedback) {
		return dao.createFeedback(feedback);
	}
	
	@GetMapping("/allfeedback")
	private String getAllFeedbacks() {
		return dao.getAllFeedbacks();
	}
	
	
	//PROMOTION 
	
	@GetMapping("/allpromotions")
	private String getAllPromotions() {
		return dao.getAllPromotions();
	}
	
	@GetMapping("/promotionbyid/{id}")
	private Promotion getPromotionById(@PathVariable int id) {
		return dao.getPromotionById(id);
	}
	
	@PostMapping("/createpromotion")
	private Promotion createPromotion(@RequestBody Promotion promo) {
		return dao.createPromotion(promo);
	}
	
	@PutMapping("/updatepromotion")
	public Promotion updatePromotion(@RequestBody Promotion promotion) {
		return dao.updatePromotion(promotion);
	}
	

	@DeleteMapping("/deletepromotion/{id}")
	public ResponseEntity<HttpStatus> deletePromotion(@PathVariable int id) {
		return dao.deletePromotion(id);
	}
	
}
