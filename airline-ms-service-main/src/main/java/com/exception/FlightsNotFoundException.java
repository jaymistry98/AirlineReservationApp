package com.exception;

public class FlightsNotFoundException extends RuntimeException {
	
	public FlightsNotFoundException(Long flightId) {
		super("Could not find the flight with " + flightId);
	}

}