package com.POS_system_backend.dto;

import lombok.Data;

@Data
public class TrialSignupRequest {
    private String businessName;
    private String ownerName;
    private String email;
    private String mobile;
    private String password;
}