package com.example.moneyTime.controller;

import com.example.moneyTime.model.Workout;
import com.example.moneyTime.service.WorkoutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;


@CrossOrigin("*")
@RestController
@RequestMapping("api/v1/workouts")
public class WorkoutController {
    private final WorkoutService workoutService;

    @Autowired
    public WorkoutController(WorkoutService workoutService) {
        this.workoutService = workoutService;
    }

    @PostMapping(path = "/{userId}")
    public ArrayList<Workout> createWorkouts(@PathVariable(value = "userId") String userId){
        System.out.println("generating workouts...");
        return workoutService.createWorkoutsAfterRegister(userId);
    }
}
