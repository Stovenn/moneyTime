package com.example.moneyTime.service;

import com.example.moneyTime.dao.ExerciseRepository;
import com.example.moneyTime.model.Exercise;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExerciseService {
    private final ExerciseRepository exerciseRepository;

    @Autowired
    ExerciseService(ExerciseRepository exerciseRepository){
        this.exerciseRepository = exerciseRepository;
    }

    public List<Exercise> getExercises(){
        return  this.exerciseRepository.findAll();
    }
}
