package com.example.moneyTime.controller;

import com.example.moneyTime.service.UserService;
import com.example.moneyTime.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("admin/api/v1/users")
public class UserManagementController {
    private final UserService userService;

    @Autowired
    public UserManagementController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    //@PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_ADMIN_ATHLETE')")
    public List<User> getUsers(){
        return userService.findAllUsers();
    }

    @PostMapping()
    //@PreAuthorize("hasAuthority('athlete:write')")
    public void registerNewUser(@RequestBody User user){
        System.out.println("create new user");
        System.out.println(user);
    }

    @DeleteMapping(path = "{userId}")
   // @PreAuthorize("hasAuthority('athlete:write')")
    public void deleteUser(@PathVariable("userId") String userId){
        System.out.println("delete user");
        System.out.println(userId);
    }

    @PutMapping(path = "{userId}")
    //@PreAuthorize("hasAuthority('athlete:write')")
    public void updateUser(@PathVariable("userId")String userId,
                           @RequestBody User user) {
        System.out.println("update user");
        System.out.println(String.format("%s,%s",userId, user));
    }

}
