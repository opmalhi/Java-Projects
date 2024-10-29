package com.rest.webservices.restful_web_services.filtering.staticFiltering;

import com.fasterxml.jackson.annotation.JsonIgnore;

// Class level ignoring
/* if field name change in future we need to remember it to change in class level as well
    that's why we prefer field level ignoring
 */
//@JsonIgnoreProperties("field1") // single property ignoring
//@JsonIgnoreProperties({"field1", "field2"}) // multiple level ignoring
public class SomeBean {

    private String field1;

    // Field level ignoring
    @JsonIgnore
    private String field2;

    private String field3;

    public SomeBean(String field1, String field2, String field3) {
        this.field1 = field1;
        this.field2 = field2;
        this.field3 = field3;
    }

    public String getField1() {
        return field1;
    }

    public String getField2() {
        return field2;
    }

    public String getField3() {
        return field3;
    }

    @Override
    public String toString() {
        return "SomeBean{" +
                "field1='" + field1 + '\'' +
                ", field2='" + field2 + '\'' +
                ", field3='" + field3 + '\'' +
                '}';
    }
}
