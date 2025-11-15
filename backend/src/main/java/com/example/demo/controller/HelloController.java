package com.example.demo.controller;

import com.example.demo.model.Message;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class HelloController {
    @GetMapping("/api/hello")
    public Message hello() {
        return new Message("Hello from Java Backend!");
    }
}
