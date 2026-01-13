package com.POS_system_backend.service.impl;

import com.POS_system_backend.dto.CategoryDto;
import com.POS_system_backend.entity.Category;
import com.POS_system_backend.entity.Store;
import com.POS_system_backend.mapper.CategoryMapper;
import com.POS_system_backend.repository.CategoryRepository;
import com.POS_system_backend.repository.StoreRepository;
import com.POS_system_backend.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private StoreRepository storeRepository;

    @Autowired
    private CategoryMapper categoryMapper;

    @Override
    public CategoryDto createCategory(CategoryDto categoryDto) {
        Category category = categoryMapper.toEntity(categoryDto);

        if (categoryDto.getStoreId() != null) {
            Optional<Store> storeOptional = storeRepository.findById(categoryDto.getStoreId());
            if (storeOptional.isPresent()) {
                category.setStore(storeOptional.get());
            } else {
                throw new RuntimeException("Store not found with id: " + categoryDto.getStoreId());
            }
        }

        Category savedCategory = categoryRepository.save(category);
        return categoryMapper.toDto(savedCategory);
    }
}
