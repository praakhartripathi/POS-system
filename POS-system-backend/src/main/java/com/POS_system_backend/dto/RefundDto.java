package com.POS_system_backend.dto;

import com.POS_system_backend.entity.enums.PaymentType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RefundDto {
    private Long id;
    private Long orderId;
    private String reason;
    private double amount;
    private Long cashierId;
    private Long branchId;
    private Long shiftReportId;
    private PaymentType paymentType;
    private LocalDateTime createdAt;
}
