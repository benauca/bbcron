package com.jbm.bbcron;

import java.util.Calendar;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.jbm.bbcron.domain.User;

@SpringBootApplication
@EnableEurekaClient
@EnableDiscoveryClient
public class BBCronUserApplication {

	static Logger _logger = LoggerFactory.getLogger(BBCronUserApplication.class);

	public static void main(String[] args) {
		_logger.debug("[START] " + BBCronUserApplication.class.getName());
		SpringApplication.run(BBCronUserApplication.class, args);
	}
	
	
	@RefreshScope
	@RestController
	class BBCronTestController {

		Logger _logger = LoggerFactory.getLogger(this.getClass());

		@Value("${user.role:Hello default}")
		private String role;

		@RequestMapping("/test")
		public User test(@RequestParam(value = "idUser", defaultValue = "0") String idUser) {
			long start = Calendar.getInstance().getTimeInMillis();
			_logger.info("[START]  Method  testUser: " + idUser + "Rol: " + role);
			User anUser = new User();
			anUser.setId(new Long(idUser));
			anUser.setName(role);
			_logger.info("[FINISH] Method user in " + (Calendar.getInstance().getTimeInMillis() - start) + " mls.");
			return anUser;
		}
	}

}
