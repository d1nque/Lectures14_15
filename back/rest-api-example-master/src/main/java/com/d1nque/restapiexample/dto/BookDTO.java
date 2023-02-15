package com.d1nque.restapiexample.dto;

public record BookDTO(
        Long id,
        String title,
        String author,
        String category
) {

}
