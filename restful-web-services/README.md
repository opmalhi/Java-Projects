## RestFul Web Service with Spring Boot

To run this application with Java H2 Database  

## Java H2 Database
- we need to modify our User class and put @Entity annotation on class and @Id annotation on id variable to create table in h2 database

- We must have following dependencies in our pom.xml file
### /pom.xml 
```
<dependency>
    <groupId>com.h2database</groupId>
	<artifactId>h2</artifactId>
	<scope>runtime</scope>
</dependency> 

<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
```

### /src/main/resources/application.properties Modified
- instead of dynamic jdbc url we have defined static jdbc url in application.properties file

```
#if you don't see the h2 console (http://localhost:8080/h2-console) uncomment below line
#spring.h2.console.enabled=true
spring.datasource.url=jdbc:h2:mem:testdb
spring.jpa.defer-datasource-initialization=true
```

### create new file name as "data.sql" at this path /src/main/resources/

- insert few data in h2 database


```
insert into user_details(id, birth_date, name)
values(10001, current_date(), 'Adam');

insert into user_details(id, birth_date, name)
values(10002, current_date(), 'John');

insert into user_details(id, birth_date, name)
values(10003, current_date(), 'Alex');
```