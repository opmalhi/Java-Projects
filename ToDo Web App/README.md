## Todo Web Application with Spring Boot

To run this application with docker MySQL check Docker section else run with Java H2 Database section 

## Docker

### Installation
- [Docker](https://docs.docker.com/engine/install/)
- [Mysqlsh](https://dev.mysql.com/doc/mysql-shell/8.0/en/mysql-shell-install.html)

Launch MySQL using Docker
```
docker run --detach --env MYSQL_ROOT_PASSWORD=dummypassword --env MYSQL_USER=todos-user --env MYSQL_PASSWORD=dummytodos --env MYSQL_DATABASE=todos --name mysql --publish 3306:3306 mysql:8-oracle
```


mysqlsh commands 
```
mysqlsh
\connect todos-user@localhost:3306
\sql
use todos
select * from todo;
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
#spring.datasource.url=jdbc:mysql://localhost:3306/todos
#spring.datasource.username=todos-user
#spring.datasource.password=dummytodos
#spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect
#spring.jpa.hibernate.ddl-auto=update
```
