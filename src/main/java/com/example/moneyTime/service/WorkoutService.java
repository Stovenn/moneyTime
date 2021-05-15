package com.example.moneyTime.service;

import com.example.moneyTime.dao.ExerciseRepository;
import com.example.moneyTime.model.ExerciseSet;
import com.example.moneyTime.model.User;
import com.example.moneyTime.model.Workout;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class WorkoutGenerator {

    private ExerciseRepository exerciseRepository;

    @Autowired
    WorkoutGenerator(ExerciseRepository exerciseRepository){
        this.exerciseRepository = exerciseRepository;
    }

    public void createNewWorkout(User user){

        ArrayList<ExerciseSet> sets = new ArrayList<ExerciseSet>();

        String position = user.getPosition();
        String experience = user.getExperience();

        if(position.equals("meneur")){
            for (int i = 0; i < 3 ; i++) {
                sets.add(new ExerciseSet(
                        12, exerciseRepository.find({"type":"DRIBBLE"}).get()
                ));
            }
            for (int i = 0; i < 3 ; i++) {

            }
            for (int i = 0; i < 3 ; i++) {

            }
            for (int i = 0; i < 3 ; i++) {

            }
        }

        if(position.equals("arriere/ailier")){

        }

        if(position.equals("pivot")){

        }
        user.getWorkouts().add(new Workout());
    }
}
