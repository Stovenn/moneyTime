package com.example.moneyTime.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.util.ArrayList;

@Getter
@Setter
@EqualsAndHashCode
@NoArgsConstructor
@ToString
@Document(collection = "workouts")
public class Workout {

    @Id
    private String workoutId;
    private boolean started;
    private boolean finished;
    private LocalDate date;
    private ArrayList<ExerciseSet> sets;

    public Workout(ArrayList<ExerciseSet> sets, LocalDate date) {
        this.started = false;
        this.finished = false;
        this.date = date;
        this.sets = sets;
    }
}
