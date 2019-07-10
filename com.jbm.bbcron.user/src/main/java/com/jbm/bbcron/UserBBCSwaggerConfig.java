package com.jbm.bbcron;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class UserBBCSwaggerConfig {

	@Bean
	public Docket userApi() {
		return new Docket(DocumentationType.SWAGGER_2).select()
				.apis(RequestHandlerSelectors.basePackage("com.jbm.bbcron.rest")).paths(PathSelectors.any()).build()
				.apiInfo(userApiInfo());

	}

	private ApiInfo userApiInfo() {
		return new ApiInfo("BBCron User Api", "Gestión de usuarios a los usuarios de BBCron.", "1.0.0",
				"Terms of service", "Benauca", "License of API", "API license URL");
	}
}
