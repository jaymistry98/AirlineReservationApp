package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.entity.Feedback;
import com.entity.Flights;
import com.entity.User;

@Repository
public interface FeedbackRepository extends JpaRepository<Feedback, Integer>{

}
