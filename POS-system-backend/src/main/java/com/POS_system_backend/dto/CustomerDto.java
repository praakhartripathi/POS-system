package com.POS_system_backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CustomerDto {
    private Long id;
    private String firstName;
    private String email;
    private String phone;
    private LocalDateTime createdDate;
    private LocalDateTime modifiedDate;
    private LocalDateTime updatedAt;
}
