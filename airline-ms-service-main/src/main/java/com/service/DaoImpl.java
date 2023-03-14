package com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

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

@Service
@Repository
public class DaoImpl implements Dao {
	
	//FLIGHT
	@Autowired
	private FlightsRepository flightsRepo;
	
	//USER
	@Autowired
	private UserRepository userRepo;
		
	//OFFER
	@Autowired
	private OffersRepository offerRepo;
	
	//FEEDBACK
	@Autowired
	private FeedbackRepository feedRepo;
		
	//PROMOTION 
	@Autowired
	private PromotionRepository promoRepo;

	@Override
	public List<Flights> getAllFlights() {
		List<Flights> flightList = flightsRepo.findAll();
		System.out.println(flightList);
		return flightsRepo.findAll();
	}

	@Override
	public Flights createFlight(Flights flight) {
		System.out.println(flight);
		return flightsRepo.save(flight);
	}

	@Override
	public Optional<Flights> getTicketData(Long id) {
		Optional<Flights> flight = flightsRepo.findById(id);
		System.out.println(flight);
		if(flight.isPresent()) {
			return flight;
		}
		throw new FlightsNotFoundException(id);
		//return flightsRepo.findById(id);
	}
	
	/*
	@Override
	public Flights updateFlight(Flights flight) {
		return flightsRepo.save(flight);
	}
	*/
	@Override
	public boolean updateFlight(Flights flight) {
		if(flightsRepo.findById(flight.getFlightId()).isPresent()) {
			flightsRepo.save(flight);
			return true;
		}
		return false;
	}
	
	@Override
	public ResponseEntity<HttpStatus> deleteFlight(Long id) {
		flightsRepo.deleteById(id);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

	@Override
	public List<User> getAllUsers() {
		List<User> userList = userRepo.findAll();
		System.out.println(userList);
		return userRepo.findAll();
	}

	@Override
	public User createUser(User user) {
		System.out.println(user);
		return userRepo.save(user);
	}

	@Override
	public User updateOffer(User user) {
		return userRepo.save(user);
	}

	@Override
	public List<Offers> getAllOffers() {
		List<Offers> offerList = offerRepo.findAll();
		System.out.println(offerList);
		return offerRepo.findAll();
	}

	@Override
	public Offers createOffer(Offers offer) {
		System.out.println(offer);
		return offerRepo.save(offer);
	}

	@Override
	public Optional<Offers> getOfferById(int id) {
		Optional<Offers> offer = offerRepo.findById(id);
		System.out.println(offer);
		if(offer.isPresent()) {
			return offer;
		}
		throw new OffersNotFoundException(id);
		//return offerRepo.findById(id);
	}

	/*
	@Override
	public Offers updateOffer(Offers offer) {
		return offerRepo.save(offer);
	}
	*/
	@Override
	public boolean updateOffer(Offers offer) {
		if(offerRepo.findById(offer.getOfferId()).isPresent()) {
			offerRepo.save(offer);
			return true;
		}
		return false;
	}
	

	@Override
	public ResponseEntity<HttpStatus> deleteOffer(int id) {
		offerRepo.deleteById(id);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

	@Override
	public Feedback createFeedback(Feedback feedback) {
		System.out.println(feedback);
		return feedRepo.save(feedback);
	}

	@Override
	public List<Feedback> getAllFeedbacks() {
		return feedRepo.findAll();
	}

	@Override
	public List<Promotion> getAllPromotions() {
		List<Promotion> promoList = promoRepo.findAll();
		System.out.println(promoList);
		return promoRepo.findAll();
	}

	@Override
	public Optional<Promotion> getPromotionById(int id) {
		Optional<Promotion> promo = promoRepo.findById(id);
		System.out.println(promo);
		if(promo.isPresent()) {
			return promo;
		}
		throw new PromotionNotFoundException(id);
		//return promoRepo.findById(id);
	}

	@Override
	public Promotion createPromotion(Promotion promo) {
		System.out.println(promo);
		return promoRepo.save(promo);
	}
	
	/*
	@Override
	public Promotion updatePromotion(Promotion promotion) {
		return promoRepo.save(promotion);
	}
	*/
	@Override
	public boolean updatePromotion(Promotion promotion) {
		if(promoRepo.findById(promotion.getPromotionId()).isPresent()) {
			promoRepo.save(promotion);
			return true;
		}
		return false;
	}

	@Override
	public ResponseEntity<HttpStatus> deletePromotion(int id) {
		promoRepo.deleteById(id);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

}
