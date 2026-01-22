package com.POS_system_backend.controller;

import com.POS_system_backend.dto.TrialSignupRequest;
import com.POS_system_backend.entity.TrialAccount;
import com.POS_system_backend.service.TrialService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/trial")
@CrossOrigin(origins = "*") // Allow frontend access
public class TrialController {

    @Autowired
    private TrialService trialService;

    @PostMapping("/signup")
    public ResponseEntity<?> registerTrial(@RequestBody TrialSignupRequest request) {
        Map<String, Object> response = trialService.createTrialAccount(request);
        return ResponseEntity.ok(response);
    }
}