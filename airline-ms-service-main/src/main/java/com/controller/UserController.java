package com.controller;

import java.util.List;
import java.util.Optional;

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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.entity.Feedback;
import com.entity.Flights;
import com.entity.Offers;
import com.entity.Promotion;
import com.entity.User;
import com.exception.FlightsNotFoundException;
import com.exception.OffersNotFoundException;
import com.exception.PromotionNotFoundException;
import com.repository.FeedbackRepository;
import com.repository.FlightsRepository;
import com.repository.OffersRepository;
import com.repository.PromotionRepository;
import com.repository.UserRepository;
import com.service.Dao;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("*")
public class UserController {
	
	@Autowired
	private Dao dao;
	
	//FLIGHT
	
	@GetMapping("/allflight")
	private List<Flights> getAllFlights() {
		return dao.getAllFlights();
	}
	
	@PostMapping("/createflight")
	private Flights createFlight(@RequestBody Flights flight) {
		return dao.createFlight(flight);
	}
	
	@GetMapping("/ticketdata/{id}")
	public Optional<Flights> getTicketData(@PathVariable Long id) {
		return dao.getTicketData(id);
	}
	
	/*
	@PutMapping("/updateflight")
	public Flights updateFlight(@RequestBody Flights flight) {
		return dao.updateFlight(flight);
	}
	*/
	@PutMapping("/updateflight")
	public Flights updateFlight(@RequestBody Flights flight) {
		if(dao.updateFlight(flight)) {
			return flight;
		}
		throw new FlightsNotFoundException(flight.getFlightId());
	}
	

	@DeleteMapping("/deleteflight/{id}")
	public ResponseEntity<HttpStatus> deleteFlight(@PathVariable Long id) {
		return dao.deleteFlight(id);
	}
	
	
	//USER
	
	@GetMapping("/alluser")
	private List<User> getAllUsers() {
		return dao.getAllUsers();
	}
	
	@PostMapping("/createuser")
	private User createUser(@RequestBody User user) {
		return dao.createUser(user);
	}
	
	@PutMapping("/updateuser")
	public User updateOffer(@RequestBody User user) {
		return dao.updateOffer(user);
	}
	
	//OFFER
	
	@GetMapping("/alloffers")
	private List<Offers> getAllOffers(){
		return dao.getAllOffers();
	}
	
	@PostMapping("/createoffer")
	private Offers createOffer(@RequestBody Offers offer) {
		return dao.createOffer(offer);
	}
	
	@GetMapping("/offerbyid/{id}")
	public Optional<Offers> getOfferById(@PathVariable int id) {
		return dao.getOfferById(id);
	}
	
	/*
	@PutMapping("/updateoffer")
	public Offers updateOffer(@RequestBody Offers offer) {
		return dao.updateOffer(offer);
	}
	*/
	@PutMapping("/updateoffer")
	public Offers updateOffer(@RequestBody Offers offer) {
		if(dao.updateOffer(offer)) {
			return offer;
		}
		throw new OffersNotFoundException(offer.getOfferId());
	}
	
	@DeleteMapping("/deleteoffer/{id}")
	public ResponseEntity<HttpStatus> deleteOffer(@PathVariable int id) {
		return dao.deleteOffer(id);
	}
	
	
	//FEEDBACK
		
	@PostMapping("/createfeedback")
	private Feedback createFeedback(@RequestBody Feedback feedback) {
		return dao.createFeedback(feedback);
	}
	
	@GetMapping("/allfeedback")
	private List<Feedback> getAllFeedbacks(){
		return dao.getAllFeedbacks();
	}
	
	
	//PROMOTION 
	
	@GetMapping("/allpromotions")
	private List<Promotion> getAllPromotions(){
		return dao.getAllPromotions();
	}
	
	@GetMapping("/promotionbyid/{id}")
	public Optional<Promotion> getPromotionById(@PathVariable int id) {
		return dao.getPromotionById(id);
	}
	
	@PostMapping("/createpromotion")
	private Promotion createPromotion(@RequestBody Promotion promo) {
		return dao.createPromotion(promo);
	}	
	
	/*
	@PutMapping("/updatepromotion")
	public Promotion updatePromotion(@RequestBody Promotion promotion) {
		return dao.updatePromotion(promotion);
	}
	*/
	@PutMapping("/updatepromotion")
	public Promotion updatePromotion(@RequestBody Promotion promotion) {
		if(dao.updatePromotion(promotion)) {
			return promotion;
		}
		throw new PromotionNotFoundException(promotion.getPromotionId());
	}
	

	@DeleteMapping("/deletepromotion/{id}")
	public ResponseEntity<HttpStatus> deletePromotion(@PathVariable int id) {
		return dao.deletePromotion(id);
	}
	
}

