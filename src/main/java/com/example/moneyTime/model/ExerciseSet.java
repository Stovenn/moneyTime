package com.example.moneyTime.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;

@Getter
@Setter
@EqualsAndHashCode
@NoArgsConstructor
@ToString
@Document(collection = "sets")
public class ExerciseSet {

    @Id
    private String setId;
    private Integer reps;
    private Exercise exercise;

    public ExerciseSet(Integer reps, Exercise exercise){
        this.reps = reps;
        this.exercise = exercise;
    }
}
