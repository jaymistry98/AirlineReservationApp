package com.entity;

import java.sql.Date;
import java.sql.Time;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "airline_flights")
@Data
 
public class Flights {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long flightId;
	private String flightName;
	private String flightFrom;
	private String flightTo;
	private int totalSeats;
	private Long economicPrice;
	private Long businessPrice;
	private Long firstClassPrice;
	private Date flightDepartureDate;
	private Date flightArrivalDate;
	private Time flightDepartureTime;
	private Time flightArrivalTime;
	public Flights() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Flights(Long flightId, String flightName, String flightFrom, String flightTo, int totalSeats,
			Long economicPrice, Long businessPrice, Long firstClassPrice, Date flightDepartureDate,
			Date flightArrivalDate, Time flightDepartureTime, Time flightArrivalTime) {
		super();
		this.flightId = flightId;
		this.flightName = flightName;
		this.flightFrom = flightFrom;
		this.flightTo = flightTo;
		this.totalSeats = totalSeats;
		this.economicPrice = economicPrice;
		this.businessPrice = businessPrice;
		this.firstClassPrice = firstClassPrice;
		this.flightDepartureDate = flightDepartureDate;
		this.flightArrivalDate = flightArrivalDate;
		this.flightDepartureTime = flightDepartureTime;
		this.flightArrivalTime = flightArrivalTime;
	}
	@Override
	public String toString() {
		return "Flights [flightId=" + flightId + ", flightName=" + flightName + ", flightFrom=" + flightFrom
				+ ", flightTo=" + flightTo + ", totalSeats=" + totalSeats + ", economicPrice=" + economicPrice
				+ ", businessPrice=" + businessPrice + ", firstClassPrice=" + firstClassPrice + ", flightDepartureDate="
				+ flightDepartureDate + ", flightArrivalDate=" + flightArrivalDate + ", flightDepartureTime="
				+ flightDepartureTime + ", flightArrivalTime=" + flightArrivalTime + "]";
	}
	public Long getFlightId() {
		return flightId;
	}
	public void setFlightId(Long flightId) {
		this.flightId = flightId;
	}
	public String getFlightName() {
		return flightName;
	}
	public void setFlightName(String flightName) {
		this.flightName = flightName;
	}
	public String getFlightFrom() {
		return flightFrom;
	}
	public void setFlightFrom(String flightFrom) {
		this.flightFrom = flightFrom;
	}
	public String getFlightTo() {
		return flightTo;
	}
	public void setFlightTo(String flightTo) {
		this.flightTo = flightTo;
	}
	public int getTotalSeats() {
		return totalSeats;
	}
	public void setTotalSeats(int totalSeats) {
		this.totalSeats = totalSeats;
	}
	public Long getEconomicPrice() {
		return economicPrice;
	}
	public void setEconomicPrice(Long economicPrice) {
		this.economicPrice = economicPrice;
	}
	public Long getBusinessPrice() {
		return businessPrice;
	}
	public void setBusinessPrice(Long businessPrice) {
		this.businessPrice = businessPrice;
	}
	public Long getFirstClassPrice() {
		return firstClassPrice;
	}
	public void setFirstClassPrice(Long firstClassPrice) {
		this.firstClassPrice = firstClassPrice;
	}
	public Date getFlightDepartureDate() {
		return flightDepartureDate;
	}
	public void setFlightDepartureDate(Date flightDepartureDate) {
		this.flightDepartureDate = flightDepartureDate;
	}
	public Date getFlightArrivalDate() {
		return flightArrivalDate;
	}
	public void setFlightArrivalDate(Date flightArrivalDate) {
		this.flightArrivalDate = flightArrivalDate;
	}
	public Time getFlightDepartureTime() {
		return flightDepartureTime;
	}
	public void setFlightDepartureTime(Time flightDepartureTime) {
		this.flightDepartureTime = flightDepartureTime;
	}
	public Time getFlightArrivalTime() {
		return flightArrivalTime;
	}
	public void setFlightArrivalTime(Time flightArrivalTime) {
		this.flightArrivalTime = flightArrivalTime;
	}
	
	
}
