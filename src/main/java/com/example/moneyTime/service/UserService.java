package com.example.moneyTime.service;

import com.example.moneyTime.model.User;
import com.example.moneyTime.dao.UserRepository;
import com.example.moneyTime.validation.EmailValidator;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UserService implements UserDetailsService {

    private final static String USER_NOT_FOUND_MESSAGE = "user with email %s not found";
    private final EmailValidator emailValidator;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public List<User> findAllUsers() {
        return this.userRepository.findAll();
    }
    public Optional<User> findById(String userId){
        return this.userRepository.findById(userId);
    }
    public Optional<User> findByEmail(String email){
        return this.userRepository.findByEmail(email);
    }


    public ResponseEntity<User> createUser(User user){
        try {
            boolean isValidEmail = emailValidator.test(user.getEmail());
            if(!isValidEmail){
                throw new IllegalStateException("Email not valid");
            }
            User _user = userRepository.save(new User(user.getFirstName(), user.getLastName(), user.getEmail(), user.getBirthdate(), user.getPassword()));
            return new ResponseEntity<>(_user, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Override
    public UserDetails loadUserByUsername(String email)
        throws UsernameNotFoundException {
            return (UserDetails) userRepository.findByEmail(email)
                    .orElseThrow(()->
                            new UsernameNotFoundException(
                                    String.format(USER_NOT_FOUND_MESSAGE, email)));
    }

    public String signUpUser(User user) {
        boolean userExists = userRepository.findByEmail(user.getEmail()).isPresent();
        if(userExists) {
            throw new IllegalStateException("Email already taken");
        }
        String encodedPassword = passwordEncoder.encode(user.getPassword());

        user.setPassword(encodedPassword);
        userRepository.save(user);

        return "it works";
    }
}