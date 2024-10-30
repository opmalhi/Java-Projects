## RestFul Web Service with Spring Boot

To run this application with Java H2 Database  

## Java H2 Database

### /src/main/resources/application.properties Modified
- instead of dynamic jdbc url we have defined static jdbc url in application.properties file

```
logging.level.org.springframework=info

#spring actuator to monitor and manage application in production
management.endpoints.web.exposure.include=*

#if you don't see the h2 console (http://localhost:8080/h2-console) uncomment below line
#spring.h2.console.enabled=true
spring.datasource.url=jdbc:h2:mem:testdb
spring.jpa.defer-datasource-initialization=true

#To check which sql queries are triggered uncomment below line
#spring.jpa.show-sql=true
```

### /src/main/resources/data.sql Modified 

- insert data in h2 database

```
insert into user_details(id, birth_date, name)
values(10001, current_date(), 'Adam');

insert into user_details(id, birth_date, name)
values(10002, current_date(), 'John');

insert into user_details(id, birth_date, name)
values(10003, current_date(), 'Alex');

insert into post(id, description, user_id)
values(20001, 'I want to learn AWS', 10001);

insert into post(id, description, user_id)
values(20002, 'I want to learn DevOps', 10001);

insert into post(id, description, user_id)
values(20003, 'I want to Get AWS Certified', 10002);

insert into post(id, description, user_id)
values(20004, 'I want to learn Multi Cloud', 10002);
```