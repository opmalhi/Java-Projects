package com.rest.webservices.todo_restful_web_services.basic;

import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

//@Configuration
public class BasicAuthenticationSecurityConfiguration {

    //We want to configure Spring Security Filter Chain
    //whenever request comes to a spring security it tries to check set of filters
    //whenever we have session we will enable csrf
    //by default it authenticate all requests
    //we have stateless rest api, so we will disable csrf
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        //1: Response to preflight request doesn't pass access control check
        // (HttpMethod.OPTIONS, "/**") we enabled preflight request

        //2: basic auth
        // we create test url for basic authentication
        return
                http
                    .authorizeHttpRequests(
                        auth -> auth
                                .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll()
                                .anyRequest().authenticated()
                    )
                    .httpBasic(Customizer.withDefaults())
                    .sessionManagement(
                        session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                    )
                    .csrf(
                        csrf -> csrf.disable()
                    ).build();
    }
}
