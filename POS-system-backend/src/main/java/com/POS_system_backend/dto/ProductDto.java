package com.POS_system_backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductDto {
    private Long id;
    private String name;
    private String sku;
    private String description;
    private double mrp;
    private double sellingPrice;
    private String brand;
    private String image;
    private Long categoryId;
    private Long storeId;
}
