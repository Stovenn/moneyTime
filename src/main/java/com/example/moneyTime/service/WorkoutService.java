package com.example.moneyTime.service;

import com.example.moneyTime.dao.ExerciseRepository;
import com.example.moneyTime.dao.UserRepository;
import com.example.moneyTime.dao.WorkoutRepository;
import com.example.moneyTime.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Random;
import java.util.stream.Stream;

@Service
public class WorkoutService {
    private ExerciseRepository exerciseRepository;
    private WorkoutRepository workoutRepository;
    private UserRepository userRepository;

    @Autowired
    WorkoutService(WorkoutRepository workoutRepository, ExerciseRepository exerciseRepository, UserRepository userRepository){
        this.workoutRepository = workoutRepository;
        this.exerciseRepository = exerciseRepository;
        this.userRepository = userRepository;
    }

    public void createWorkoutsAfterRegister(String email){
        System.out.println(email);
        Optional<User> user = userRepository.findByEmail(email);
        System.out.println(user);
//        if (user.getWorkouts().isEmpty()){
//            throw new IllegalStateException("[CreateWorkoutsAfterRegister] Error while attempting to create workouts: User workouts is not empty");
//        }
        //createNewWorkouts(user);
    }

    @Scheduled( fixedRate = 1000 * 60 * 120 )
    public void generateWorkoutTask(){
        Stream<User> userList = userRepository.findAll()
                .stream().filter(user ->
                        !user.getWorkouts().isEmpty() &&
                                user.getWorkouts()
                                        .get(user.getWorkouts().size() - 1)
                                        .getDate().isBefore(LocalDate.now().minusDays(7))
                );

        userList.forEach(user -> createNewWorkouts(user));
    }

    public void createNewWorkouts(User user){
        System.out.println("Create Workout");
        List<Exercise> exercises = exerciseRepository.findAll();

            for (int n = 0; n < 7; n++) {
                ArrayList<ExerciseSet> currentSets = new ArrayList<>();
                String position = user.getPosition();
                String experience = user.getExperience();
                Double difficultyRatio = experience.equals("avance") ? 1.3 : experience.equals("intermediaire") ? 1.2 : 1;


                if(position.equals("meneur")){
                    for (int i = 0; i < 3 ; i++) {
                        ArrayList<ExerciseSet> a =  this.generateSets(exercises, currentSets, "WARMUP", difficultyRatio);
                        currentSets.addAll(a);
                    }
                    for (int i = 0; i < 3 ; i++) {
                        ArrayList<ExerciseSet> a =  this.generateSets(exercises, currentSets, "SHOOT", difficultyRatio);
                        currentSets.addAll(a);
                    }
                    for (int i = 0; i < 4 ; i++) {
                        ArrayList<ExerciseSet> a =  this.generateSets(exercises, currentSets, "DRIBBLE", difficultyRatio);
                        currentSets.addAll(a);
                    }
                    for (int i = 0; i < 3 ; i++) {
                        ArrayList<ExerciseSet> a =  this.generateSets(exercises, currentSets, "FINISH", difficultyRatio);
                        currentSets.addAll(a);
                    }
                    for (int i = 0; i < 2 ; i++) {
                        ArrayList<ExerciseSet> a =  this.generateSets(exercises, currentSets, "REBOUND", difficultyRatio);
                        currentSets.addAll(a);
                    }
                }
                if(position.equals("arriere/ailier")){
                    for (int i = 0; i < 3 ; i++) {
                        ArrayList<ExerciseSet> a =  this.generateSets(exercises, currentSets, "WARMUP", difficultyRatio);
                        currentSets.addAll(a);
                    }
                    for (int i = 0; i < 4 ; i++) {
                        ArrayList<ExerciseSet> a =  this.generateSets(exercises, currentSets, "SHOOT", difficultyRatio);
                        currentSets.addAll(a);
                    }
                    for (int i = 0; i < 3 ; i++) {
                        ArrayList<ExerciseSet> a =  this.generateSets(exercises, currentSets, "DRIBBLE", difficultyRatio);
                        currentSets.addAll(a);
                    }
                    for (int i = 0; i < 3 ; i++) {
                        ArrayList<ExerciseSet> a =  this.generateSets(exercises, currentSets, "FINISH", difficultyRatio);
                        currentSets.addAll(a);
                    }
                    for (int i = 0; i < 2 ; i++) {
                        ArrayList<ExerciseSet> a =  this.generateSets(exercises, currentSets, "REBOUND", difficultyRatio);
                        currentSets.addAll(a);
                    }
                }

                if(position.equals("af/pivot")){
                    for (int i = 0; i < 3 ; i++) {
                        ArrayList<ExerciseSet> a =  this.generateSets(exercises, currentSets, "WARMUP", difficultyRatio);
                        currentSets.addAll(a);
                    }
                    for (int i = 0; i < 2 ; i++) {
                        ArrayList<ExerciseSet> a =  this.generateSets(exercises, currentSets, "SHOOT", difficultyRatio);
                        currentSets.addAll(a);
                    }
                    for (int i = 0; i < 2 ; i++) {
                        ArrayList<ExerciseSet> a =  this.generateSets(exercises, currentSets, "DRIBBLE", difficultyRatio);
                        currentSets.addAll(a);
                    }
                    for (int i = 0; i < 4 ; i++) {
                        ArrayList<ExerciseSet> a =  this.generateSets(exercises, currentSets, "FINISH", difficultyRatio);
                        currentSets.addAll(a);
                    }
                    for (int i = 0; i < 4 ; i++) {
                        ArrayList<ExerciseSet> a =  this.generateSets(exercises, currentSets, "REBOUND", difficultyRatio);
                        currentSets.addAll(a);
                    }
                }

                Workout workout = new Workout(currentSets, user.getWorkouts().isEmpty() ? LocalDate.now() : user.getWorkouts().get(user.getWorkouts().size() - 1).getDate().plusDays(1));
                user.getWorkouts().add(workout);
                workoutRepository.save(workout);
                userRepository.save(user);
            }
      };



    public ArrayList<ExerciseSet> generateSets(List<Exercise> exercisesDic, ArrayList<ExerciseSet> currentSets, String type, Double difficultyRatio){
        ArrayList<Exercise> filteredList = new ArrayList<>();
        ArrayList<ExerciseSet> sets = new ArrayList<>();
        Random r = new Random();
        Exercise randomExercise;

        exercisesDic.forEach(exercise -> {
            if(exercise.getType().equals(ExerciceType.valueOf(type))){ filteredList.add(exercise); }
        });

        do {
            randomExercise = filteredList.get(r.nextInt(filteredList.size()));
        } while(alreadyExist(randomExercise, currentSets));

        if(type.equals("WARMUP")){
            sets.add(new ExerciseSet(randomExercise.getBaseReps(), randomExercise));
        } else {
            for (int i = 0; i < 3 ; i++) {
                sets.add(new ExerciseSet((int)Math.round(randomExercise.getBaseReps() * difficultyRatio), randomExercise));
            }
        }
        return sets;
    }

    public boolean alreadyExist(Exercise exercise, ArrayList<ExerciseSet>setsArrayList){
        for(ExerciseSet set : setsArrayList ){
            if(set.getExercise().equals(exercise)){
                return true;
            }
        }
        return false;
    }

}


