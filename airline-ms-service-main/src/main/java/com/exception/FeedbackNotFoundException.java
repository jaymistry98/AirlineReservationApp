package com.exception;

public class FeedbackNotFoundException extends RuntimeException {
	
	public FeedbackNotFoundException(int feedbackId) {
		super("Could not find the feedback with " + feedbackId);
	}

}
