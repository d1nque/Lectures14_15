package com.d1nque.restapiexample.dto;

public record BookUpdateRequest(
        String title,
        String author,
        String category
) {
}
