package com.example.moneyTime.controller;

import com.example.moneyTime.service.UserService;
import com.example.moneyTime.model.User;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
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

    @GetMapping(path = "/{userId}")
    public Optional<User> getUserById(@PathVariable("userId") String studentId){
        return userService.findById(studentId);
    }

    @GetMapping(path = "/infos/{email}")
    public User getUserByEmail(@PathVariable("email") String email){
        User user =  userService.findByEmail(email).orElse(null);
        return user;
    }

    @PutMapping
    public ResponseEntity<User>updateUser(@RequestBody User user) {
        return userService.updateUser(user);
    }


}
