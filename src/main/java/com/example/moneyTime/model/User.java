package com.example.moneyTime.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Getter
@Setter
@EqualsAndHashCode
@NoArgsConstructor
@ToString
@Document(collection = "users")
public class User implements UserDetails {

    @Id
    private String userId;
    private String firstName;
    private String lastName;
    private String email;
    private LocalDate birthdate;
    private String password;
    private Integer height;
    private Integer weight;
    private String position;
    private String experience;
    private ArrayList<Workout> workouts;


    public User(String firstName, String lastName, String email, LocalDate birthdate, String password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.birthdate = birthdate;
        this.password = password;
        this.workouts = new ArrayList<Workout>();
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return false;
    }

    @Override
    public boolean isAccountNonLocked() {
        return false;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return false;
    }

    @Override
    public boolean isEnabled() {
        return false;
    }

    public void setUsername(String username) {
        this.email = username;
    }

    @Override
    public String toString() {
        return "User{" +
                "userId='" + userId + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", birthdate=" + birthdate +
                ", password='" + password + '\'' +
                ", height=" + height +
                ", weight=" + weight +
                ", position='" + position + '\'' +
                ", experience='" + experience + '\'' +
                ", workouts=" + workouts +
                '}';
    }
}
