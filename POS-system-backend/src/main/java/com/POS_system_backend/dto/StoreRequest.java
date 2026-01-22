package com.POS_system_backend.dto;

import com.POS_system_backend.entity.StoreContact;
import com.POS_system_backend.entity.enums.StoreStatus;
import com.POS_system_backend.entity.enums.StoreType;
import lombok.Data;

@Data
public class StoreRequest {
    private String brand;
    private String description;
    private StoreType storeType;
    private StoreStatus status;
    private StoreContact contact;
}
