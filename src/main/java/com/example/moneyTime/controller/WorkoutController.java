package com.example.moneyTime.controller;


import com.example.moneyTime.model.User;
import com.example.moneyTime.model.Workout;
import com.example.moneyTime.service.WorkoutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/workouts")
public class WorkoutController {

    private final WorkoutService workoutService;

    @Autowired
    public WorkoutController(WorkoutService workoutService) {
        this.workoutService = workoutService;
    }

    @PostMapping
    public void createWorkouts(@RequestBody String email){
        workoutService.createWorkoutsAfterRegister(email);
    }
}
