package com.entity;



import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


 
public class Offers {
	
	
	private int offerId;
	private String offerFrom;
	private String offerTo;
	private int discount;
	public Offers() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Offers(int offerId, String offerFrom, String offerTo, int discount) {
		super();
		this.offerId = offerId;
		this.offerFrom = offerFrom;
		this.offerTo = offerTo;
		this.discount = discount;
	}
	@Override
	public String toString() {
		return "Offers [offerId=" + offerId + ", offerFrom=" + offerFrom + ", offerTo=" + offerTo + ", discount="
				+ discount + "]";
	}
	public int getOfferId() {
		return offerId;
	}
	public void setOfferId(int offerId) {
		this.offerId = offerId;
	}
	public String getOfferFrom() {
		return offerFrom;
	}
	public void setOfferFrom(String offerFrom) {
		this.offerFrom = offerFrom;
	}
	public String getOfferTo() {
		return offerTo;
	}
	public void setOfferTo(String offerTo) {
		this.offerTo = offerTo;
	}
	public int getDiscount() {
		return discount;
	}
	public void setDiscount(int discount) {
		this.discount = discount;
	}
	
	
	
}
