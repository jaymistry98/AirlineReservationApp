package com.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "airline_promotion")
@Data
 
public class Promotion {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int promotionId;
	private String brandName;
	private String image;
	private String promotionDescription;
	public Promotion() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Promotion(int promotionId, String brandName, String image, String promotionDescription) {
		super();
		this.promotionId = promotionId;
		this.brandName = brandName;
		this.image = image;
		this.promotionDescription = promotionDescription;
	}
	@Override
	public String toString() {
		return "Promotion [promotionId=" + promotionId + ", brandName=" + brandName + ", image=" + image
				+ ", promotionDescription=" + promotionDescription + "]";
	}
	public int getPromotionId() {
		return promotionId;
	}
	public void setPromotionId(int promotionId) {
		this.promotionId = promotionId;
	}
	public String getBrandName() {
		return brandName;
	}
	public void setBrandName(String brandName) {
		this.brandName = brandName;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public String getPromotionDescription() {
		return promotionDescription;
	}
	public void setPromotionDescription(String promotionDescription) {
		this.promotionDescription = promotionDescription;
	}
	
	

}
