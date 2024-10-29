package com.rest.webservices.restful_web_services.filtering.staticFiltering;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class StaticFilteringController {

    @GetMapping("/static/filtering")
    public SomeBean filtering(){
        return new SomeBean("value1", "value2", "value3");
    }

    @GetMapping("/static/filtering-list")
    public List<SomeBean> filteringList(){
        return Arrays.asList(new SomeBean("value1", "value2", "value3"),
                new SomeBean("value4", "value5", "value6"));
    }
}
