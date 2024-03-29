package com.d1nque.restapiexample.service;

import com.d1nque.restapiexample.dto.CategoryDTO;
import com.d1nque.restapiexample.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CategoryService {

    private final CategoryRepository categoryRepository;
    private final CategoryDTOMapper categoryDTOMapper;

    @Autowired
    public CategoryService(CategoryRepository categoryRepository, CategoryDTOMapper categoryDTOMapper){
        this.categoryRepository = categoryRepository;
        this.categoryDTOMapper = categoryDTOMapper;
    }

    public List<CategoryDTO> getAllCategories(){
        return categoryRepository
                .findAll()
                .stream()
                .map(categoryDTOMapper)
                .collect(Collectors.toList());
    }

}
