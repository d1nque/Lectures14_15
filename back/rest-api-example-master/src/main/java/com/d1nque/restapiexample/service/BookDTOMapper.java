package com.d1nque.restapiexample.service;

import com.d1nque.restapiexample.dto.BookDTO;
import com.d1nque.restapiexample.entity.Book;
import org.springframework.stereotype.Service;

import java.util.function.Function;

@Service
public class BookDTOMapper implements Function<Book, BookDTO> {
    @Override
    public BookDTO apply(Book book) {
        return new BookDTO(
                book.getId(),
                book.getTitle(),
                book.getAuthor(),
                book.getCategory().getCategoryName()
        );
    }
}
