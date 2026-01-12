package com.POS_system_backend.dto;

import com.POS_system_backend.entity.enums.OrderStatus;
import com.POS_system_backend.entity.enums.PaymentStatus;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class OrderDto {
    private Long id;
    private Long customerId;
    private Long storeId;
    private List<OrderItemDto> items;
    private double totalAmount;
    private OrderStatus orderStatus;
    private PaymentStatus paymentStatus;
    private LocalDateTime createdAt;
}
