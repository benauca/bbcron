# BBCron User Service

Microservicio que sirve para autenticar e autentificar a los usuarios.

Aplication Name: *bbcron-user*

## Features
Eureka Client

Discovery Client


## Configuración del Cliente de Configuración

	spring:
	  application:
	    name: bbcron-user
	  profiles:
	    active: development
	  cloud:
	    config:
	      uri: http://localhost:8888

	      
Una Vez conectado el Microservicio al servidor "Cloud Config", pordemos acceder a los parámetros de configuración de la siguiente manera

http://localhost:8888/bbcron-user/development/master

La Api de configuración Basada en Git se podrá consultar a través de las siguientes rutas.

		/bbcron-user/development[/master]
		/bbcron-user/development.yml
		/{label}/{application}-{profile}.yml
		/{application}-{profile}.properties
		/{label}/{application}-{profile}.properties
		

# Documentación del Microservicio

La ayuda del micro servicio se hha realizado con Swagger.

		<!-- DEPENDENCIAS CON SWAGGER -->
		<dependency>
			<groupId>io.springfox</groupId>
			<artifactId>springfox-swagger2</artifactId>
			<version>2.7.0</version>
		</dependency>
		<dependency>
			<groupId>io.springfox</groupId>
			<artifactId>springfox-swagger-ui</artifactId>
			<scope>compile</scope>
			<version>2.7.0</version>
		</dependency>
		
	http://localhost:8090/v2/api-docs
	
	http://localhost:8090/swagger-ui.html#/
	