## RestFul Web Service with Spring Boot

To run this application with docker MySQL check Docker section else run with Java H2 Database section 

## Docker

### Installation
- [Docker](https://docs.docker.com/engine/install/)
- [Mysqlsh](https://dev.mysql.com/doc/mysql-shell/8.0/en/mysql-shell-install.html)

Launch MySQL using Docker
```
docker run --detach --env MYSQL_ROOT_PASSWORD=dummypassword --env MYSQL_USER=web-service --env MYSQL_PASSWORD=dummypassword --env MYSQL_DATABASE=web-services-database --name mysql --publish 3306:3306 mysql:8-oracle
```


mysqlsh commands 
```
mysqlsh
\connect social-media-user@localhost:3306
\sql
use web-services-database
select * from user_details;
select * from post;
\quit
```

Docker Commands
```
docker container ls
docker container stop ID
```


## Java H2 Database

### /pom.xml Modified
- Uncomment h2database dependency and comment mysql dependency

```
<dependency>
    <groupId>com.h2database</groupId>
	<artifactId>h2</artifactId>
	<scope>runtime</scope>
</dependency> 


<!-- <dependency>
		<groupId>mysql</groupId>
		<artifactId>mysql-connector-java</artifactId>
		<version>8.0.12</version>
	</dependency> -->
```

### /src/main/resources/application.properties Modified

- uncomment below line
```
spring.datasource.url=jdbc:h2:mem:testdb
```

- comment below lines in application.properties
```
#spring.datasource.url=jdbc:mysql://localhost:3306/web-services-database
#spring.datasource.username=web-service
#spring.datasource.password=dummypassword
#spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect
#spring.jpa.hibernate.ddl-auto=update
```
