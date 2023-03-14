package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.entity.Flights;
import com.entity.Promotion;
import com.entity.User;

@Repository
public interface PromotionRepository extends JpaRepository<Promotion, Integer>{

}
