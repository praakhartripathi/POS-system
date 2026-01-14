package com.POS_system_backend.dto;

import com.POS_system_backend.entity.enums.UserRole;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class EmployeeDto {
    private Long id;
    private String fullName;
    private String email;
    private String password;
    private String phone;
    private UserRole role;
    private Long storeId;
    private Long branchId;
}
