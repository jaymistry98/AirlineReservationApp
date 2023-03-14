package com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.entity.Feedback;
import com.entity.Flights;
import com.entity.Offers;
import com.entity.Promotion;
import com.entity.User;


public interface Dao {
	
	public List<Flights> getAllFlights();
	public Flights createFlight(Flights flight);
	public Optional<Flights> getTicketData(Long id);
	//public Flights updateFlight(Flights flight);
	public boolean updateFlight(Flights flight);
	public ResponseEntity<HttpStatus> deleteFlight(Long id);
	
	public List<User> getAllUsers();
	public User createUser(User user);
	
	public User updateOffer(User user);
	public List<Offers> getAllOffers();
	public Offers createOffer(Offers offer);
	public Optional<Offers> getOfferById(int id);
	//public Offers updateOffer(Offers offer);
	public boolean updateOffer(Offers offer);
	public ResponseEntity<HttpStatus> deleteOffer(int id);
	
	public Feedback createFeedback(Feedback feedback);
	public List<Feedback> getAllFeedbacks();
	
	public List<Promotion> getAllPromotions();
	public Optional<Promotion> getPromotionById(int id);
	public Promotion createPromotion(Promotion promo);
	//public Promotion updatePromotion(Promotion promotion);
	public boolean updatePromotion(Promotion promotion);
	public ResponseEntity<HttpStatus> deletePromotion(int id);
}
