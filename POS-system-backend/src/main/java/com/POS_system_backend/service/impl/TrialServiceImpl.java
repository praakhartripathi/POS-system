package com.POS_system_backend.service.impl;

import com.POS_system_backend.dto.TrialSignupRequest;
import com.POS_system_backend.entity.TrialAccount;
import com.POS_system_backend.repository.TrialAccountRepository;
import com.POS_system_backend.service.TrialService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class TrialServiceImpl implements TrialService {

    @Autowired
    private TrialAccountRepository trialAccountRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public Map<String, Object> createTrialAccount(TrialSignupRequest request) {
        if (trialAccountRepository.findByEmail(request.getEmail()).isPresent()) {
            throw new RuntimeException("Email already registered for trial.");
        }

        TrialAccount account = new TrialAccount();
        account.setBusinessName(request.getBusinessName());
        account.setOwnerName(request.getOwnerName());
        account.setEmail(request.getEmail());
        account.setMobile(request.getMobile());
        
        // Encrypt password
        account.setPassword(passwordEncoder.encode(request.getPassword()));

        // Plan details (TRIAL, 7 days, 1 branch, 1 user) are set in @PrePersist in Entity
        TrialAccount savedAccount = trialAccountRepository.save(account);

        // Generate JWT Token (Mock implementation as JwtUtils is not available in context)
        String token = "mock-jwt-token-" + System.currentTimeMillis();

        Map<String, Object> response = new HashMap<>();
        response.put("message", "Trial account created successfully");
        response.put("token", token);
        response.put("role", "ROLE_ADMIN");
        response.put("name", savedAccount.getOwnerName());
        response.put("trialEndDate", savedAccount.getEndDate());
        response.put("account", savedAccount);

        return response;
    }
}