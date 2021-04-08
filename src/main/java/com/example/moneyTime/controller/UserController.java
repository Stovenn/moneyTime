package com.example.moneyTime.controller;

import com.example.moneyTime.service.UserService;
import com.example.moneyTime.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;


@CrossOrigin("*")
@RestController
@RequestMapping("api/v1/users")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> getUsers(){
        return userService.findAllUsers();
    }

    @GetMapping(path = "/{studentId}")
    public Optional<User> getUserById(@PathVariable("studentId") String studentId){
        return userService.findById(studentId);
    }

    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody @Valid User user){
        return userService.createUser(user);
    }


}
