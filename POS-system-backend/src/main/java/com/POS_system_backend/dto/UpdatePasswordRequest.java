package com.POS_system_backend.dto;

import lombok.Data;

@Data
public class UpdatePasswordRequest {
    private String email;
    private String newPassword;
}
