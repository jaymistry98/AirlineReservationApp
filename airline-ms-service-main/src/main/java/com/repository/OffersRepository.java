package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.entity.Flights;
import com.entity.Offers;
import com.entity.User;

@Repository
public interface OffersRepository extends JpaRepository<Offers, Integer>{

}
