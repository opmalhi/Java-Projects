package com.in28minutes.myfirstwebapp.security;

import static org.springframework.security.config.Customizer.withDefaults;

import java.util.function.Function;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;


@Configuration
public class SpringSecurityConfiguration {
    // to store username or password -> LDAP or database
    // we are using In Memory configure to store username and password

    @Bean
    public InMemoryUserDetailsManager createUserDetailsManager() {

        UserDetails userDetails1 = createNewUser("in28minutes", "dummy");
        UserDetails userDetails2 = createNewUser("test", "test");

        return new InMemoryUserDetailsManager(userDetails1, userDetails2);
    }

    private UserDetails createNewUser(String username, String password) {
        Function<String, String> passwordEncoder =
                input -> passwordEncoder().encode(input);

        UserDetails userDetails = User.builder()
                                    .passwordEncoder(passwordEncoder)
                                    .username(username)
                                    .password(password)
                                    .roles("USER", "ADMIN")
                                    .build();
        return userDetails;
    }

    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    // By default, there are two things configured
    // 1. All URLs are protected
    // 2. A login form is shown for unauthorized requests

    // To access H2 Console we need to disable CSRF(Cross Site Request Forgery)
    // H2 sites use of Frames and spring security by default does not allow it.

    // when we override SecurityFilterChain, we need to define entire chain again!
    // SecurityFilterChain: Defines a filter chain matched against every request
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.authorizeHttpRequests(
                auth -> auth.anyRequest().authenticated());
        http.formLogin(withDefaults());

        http.csrf((csrf) -> csrf.disable());
        http.headers(
                (headers) ->
                        headers.frameOptions((frameOptions) -> frameOptions.disable())
                );

        return http.build();
    }
}
