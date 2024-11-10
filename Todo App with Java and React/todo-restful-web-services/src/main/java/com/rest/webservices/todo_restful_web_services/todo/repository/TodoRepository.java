package com.rest.webservices.todo_restful_web_services.todo.repository;

import com.rest.webservices.todo_restful_web_services.todo.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TodoRepository extends JpaRepository<Todo, Integer> {

    List<Todo> findByUsername(String username);

}
