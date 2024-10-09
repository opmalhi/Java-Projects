- To access webapp run the project and go to following URL: http://localhost:8080/
  
To login use 
1. username: test
2. password: test

## H2 In Memory Database
- To use H2 database modify application.properties

### /src/main/resources/application.properties Modified
```
spring.datasource.url=jdbc:h2:mem:testdb
#spring.datasource.url=jdbc:mysql://localhost:3306/todos
#spring.datasource.username=todos-user
#spring.datasource.password=dummytodos
#spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect
#spring.jpa.hibernate.ddl-auto=update
```

- To access H2 database console: http://localhost:8080/h2-console/

## Docker

### Mysqlsh

- [Docker](https://docs.docker.com/engine/install/)
- [Mysqlsh](https://dev.mysql.com/doc/mysql-shell/8.0/en/mysql-shell-install.html)

First Run Docker Desktop on your operating System and then run this command on terminal
```
docker run --detach --env MYSQL_ROOT_PASSWORD=dummypassword --env MYSQL_USER=todos-user --env MYSQL_PASSWORD=dummytodos --env MYSQL_DATABASE=todos --name mysql --publish 3306:3306 mysql:8-oracle
```

### /pom.xml Modified

```
<dependency>
    <groupId>com.mysql</groupId>
	<artifactId>mysql-connector-j</artifactId>
</dependency>
```

### /src/main/resources/application.properties Modified

```
#spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.url=jdbc:mysql://localhost:3306/todos
spring.datasource.username=todos-user
spring.datasource.password=dummytodos
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect
spring.jpa.hibernate.ddl-auto=update
```
