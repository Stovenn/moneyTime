package com.example.moneyTime.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@EqualsAndHashCode
@NoArgsConstructor
@ToString
@Document(collection = "users")

public class User {

    @Id
    private String userId;
    private String firstName;
    private String lastName;
    private String email;
    private LocalDate birthdate;
    private String password;
    private Integer height;
    private Integer weight;
    private List<Workout> workouts;

    public User(String firstName,
                String lastName,
                String email,
                LocalDate birthdate,
                String password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.birthdate = birthdate;
        this.password = password;
    }
}
