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
@Document(collection = "exercises")
public class Exercise {
    @Id
    private String exerciceId;
    private String name;
    private String description;
    private ExerciceType type;
    private ExerciseLevel level;
    private Integer baseReps;
}
