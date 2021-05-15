package com.example.moneyTime.controller;

import com.example.moneyTime.model.Exercise;
import com.example.moneyTime.service.ExerciseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("api/v1/exercises")
public class ExerciseController {
    private final ExerciseService exerciseService;

    @Autowired
    ExerciseController(ExerciseService exerciseService){
        this.exerciseService = exerciseService;
    }

    @GetMapping
    public List<Exercise> getExercises(){
        return exerciseService.getExercises();
    }
}
