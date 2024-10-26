package com.rest.webservices.restful_web_services.helloworld;

import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Locale;

@RestController
public class HelloWorldController {

    private MessageSource messageSource;

    public HelloWorldController(MessageSource messageSource){
        this.messageSource = messageSource;
    }

    // get response with passing simple string
    @GetMapping(path = "/hello-world")
    public String helloWorld(){
        return "Hello World";
    }

    // get response with java bean
    @GetMapping(path = "/hello-world-bean")
    public HelloWorldBean helloWorldBean(){
        return new HelloWorldBean("Hello World");
    }

    // get response with Path Parameters
    // /users/{id}/todos/{id} => /users/2/todos/100
    // /hello-world-/path-variable/{name}
    // /hello-world-/path-variable/XYZ
    @GetMapping(path = "/hello-world/path-variable/{name}")
    public HelloWorldBean helloWorldPathVariable(@PathVariable String name){
        return new HelloWorldBean(String.format("Hello World, %s", name));
    }

    // get response with passing simple string but with different language which passed through accept language header
    @GetMapping(path = "/hello-world-internationalized")
    public String helloWorldInternationalized(){
        //1: the standard way to define messages in resources using file messages.properties
        Locale locale = LocaleContextHolder.getLocale();

        //2: we need to pick those messages according to accept language header
        return messageSource.getMessage("good.morning.message", null, "Default Message", locale);
    }
}
