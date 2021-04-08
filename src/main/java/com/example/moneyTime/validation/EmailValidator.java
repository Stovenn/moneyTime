package com.example.moneyTime.validation;

import org.springframework.stereotype.Service;

import java.util.function.Predicate;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class EmailValidator implements Predicate<String> {
     Pattern pattern;
     Matcher matcher;
     private static final String EMAIL_PATTERN = "^[\\w!#$%&'*+/=?`{|}~^-]+(?:\\.[\\w!#$%&'*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$";

     @Override
     public boolean test (String email) {
         pattern = Pattern.compile(EMAIL_PATTERN);
         matcher = pattern.matcher(email);
         return matcher.matches();
    }

}
