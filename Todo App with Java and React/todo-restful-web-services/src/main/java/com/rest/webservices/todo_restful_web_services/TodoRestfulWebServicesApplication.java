package com.rest.webservices.todo_restful_web_services;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class TodoRestfulWebServicesApplication {

	public static void main(String[] args) {
		SpringApplication.run(TodoRestfulWebServicesApplication.class, args);
	}

	//http://localhost:3000/ to 8080
	//Cross Origin Requests
	//Allow all requests only from http://localhost:3000/

	@Bean
	public WebMvcConfigurer corsConfigurer(){
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				// addMapping for specific path here we are allowing all path
				// allowedMethods where we can define specific methods like GET,POST,PATCH,DELETE and * means all methods
				// allowedOrigins where we define our outside address from where we will access or send request to methods
				registry.addMapping("/**")
						.allowedMethods("*")
						.allowedOrigins("http://localhost:3000");
			}
		};
	}

}
