package com.entity;



import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



 
public class Feedback {
	
	private int feedbackId;
	private String feedbackDescription;
	private float rating;
	public Feedback() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Feedback(int feedbackId, String feedbackDescription, float rating) {
		super();
		this.feedbackId = feedbackId;
		this.feedbackDescription = feedbackDescription;
		this.rating = rating;
	}
	@Override
	public String toString() {
		return "Feedback [feedbackId=" + feedbackId + ", feedbackDescription=" + feedbackDescription + ", rating="
				+ rating + "]";
	}
	public int getFeedbackId() {
		return feedbackId;
	}
	public void setFeedbackId(int feedbackId) {
		this.feedbackId = feedbackId;
	}
	public String getFeedbackDescription() {
		return feedbackDescription;
	}
	public void setFeedbackDescription(String feedbackDescription) {
		this.feedbackDescription = feedbackDescription;
	}
	public float getRating() {
		return rating;
	}
	public void setRating(float rating) {
		this.rating = rating;
	}
	
	
	

}
