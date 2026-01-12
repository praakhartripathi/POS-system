package com.POS_system_backend.mapper;

import com.POS_system_backend.dto.OrderDto;
import com.POS_system_backend.dto.OrderItemDto;
import com.POS_system_backend.entity.Order;
import com.POS_system_backend.entity.OrderItem;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class OrderMapper {

    public OrderDto toDto(Order order) {
        if (order == null) {
            return null;
        }
        OrderDto dto = new OrderDto();
        dto.setId(order.getId());
        if (order.getCustomer() != null) {
            dto.setCustomerId(order.getCustomer().getId());
        }
        if (order.getStore() != null) {
            dto.setStoreId(order.getStore().getId());
        }
        dto.setTotalAmount(order.getTotalAmount());
        dto.setOrderStatus(order.getOrderStatus());
        dto.setPaymentStatus(order.getPaymentStatus());
        dto.setCreatedAt(order.getCreatedAt());
        
        if (order.getItems() != null) {
            List<OrderItemDto> itemDtos = order.getItems().stream()
                    .map(this::toItemDto)
                    .collect(Collectors.toList());
            dto.setItems(itemDtos);
        }
        
        return dto;
    }

    public OrderItemDto toItemDto(OrderItem item) {
        if (item == null) {
            return null;
        }
        OrderItemDto dto = new OrderItemDto();
        dto.setId(item.getId());
        dto.setProductName(item.getProductName());
        dto.setQuantity(item.getQuantity());
        dto.setPrice(item.getPrice());
        dto.setProductId(item.getProductId());
        return dto;
    }
    
    // Note: toEntity methods usually require fetching User and Store entities from repositories,
    // so they are often better handled in the Service layer or with a more complex mapper that has access to repositories.
    // For simple DTO to Entity conversion without relations:
    
    public OrderItem toItemEntity(OrderItemDto dto) {
        if (dto == null) {
            return null;
        }
        OrderItem item = new OrderItem();
        item.setId(dto.getId());
        item.setProductName(dto.getProductName());
        item.setQuantity(dto.getQuantity());
        item.setPrice(dto.getPrice());
        item.setProductId(dto.getProductId());
        return item;
    }
}
