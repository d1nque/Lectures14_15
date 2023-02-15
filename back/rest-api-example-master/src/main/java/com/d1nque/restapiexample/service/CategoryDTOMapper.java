package com.d1nque.restapiexample.service;

import com.d1nque.restapiexample.dto.CategoryDTO;
import com.d1nque.restapiexample.entity.Category;
import org.springframework.stereotype.Service;

import java.util.function.Function;

@Service
public class CategoryDTOMapper implements Function<Category, CategoryDTO> {
    @Override
    public CategoryDTO apply(Category category) {
        return new CategoryDTO(
                category.getId(),
                category.getCategoryName()
        );
    }
}
