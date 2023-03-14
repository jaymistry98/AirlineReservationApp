package com.exception;

public class PromotionNotFoundException extends RuntimeException {
	
	public PromotionNotFoundException(int promotionId) {
		super("Could not find the promotion with " + promotionId);
	}

}
