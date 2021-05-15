package com.example.moneyTime.dao;


import com.example.moneyTime.model.ExerciseSet;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExerciseSetRepository extends MongoRepository<ExerciseSet, String> {
}
