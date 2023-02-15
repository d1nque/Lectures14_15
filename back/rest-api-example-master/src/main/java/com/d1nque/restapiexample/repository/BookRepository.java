package com.d1nque.restapiexample.repository;

import com.d1nque.restapiexample.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    List<Book> findBooksByCategory_CategoryName(String categoryName);
}
