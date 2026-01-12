package com.POS_system_backend.dto;

import com.POS_system_backend.entity.StoreContact;
import com.POS_system_backend.entity.enums.StoreStatus;
import com.POS_system_backend.entity.enums.StoreType;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class StoreDto {
    private Long id;
    private String brand;
    private Long storeAdminId;
    private String description;
    private StoreType storeType;
    private StoreStatus status;
    private StoreContact contact;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
