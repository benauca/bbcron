package com.jbm.bbcron.rest;

import java.util.Calendar;

import javax.ws.rs.Path;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.jbm.bbcron.domain.User;

/**
 * By default, the configuration values are read on the client’s startup, and
 * not again. You can force a bean to refresh its configuration - to pull
 * updated values from the Config Server - by annotating the
 * MessageRestController with the Spring Cloud Config @RefreshScope and then by
 * triggering a refresh event. You need to invoke the refresh Spring Boot
 * Actuator endpoint in order to force the client to refresh itself and draw the
 * new value in. Spring Boot’s Actuator exposes operational endpoints, like
 * health checks and environment information, about an application. In order to
 * use it you must add org.springframework.boot:spring-boot-starter-actuator to
 * the client app’s CLASSPATH. You can invoke the refresh Actuator endpoint by
 * sending an empty HTTP POST to the client’s refresh endpoint,
 * http://localhost:9080/refresh
 * 
 * @author benauca
 *
 */
@RefreshScope
@RestController
@Path("/user")
public class BBCronUserController implements IUserBBCControler {

	Logger _logger = LoggerFactory.getLogger(this.getClass());

	@Value("${user.role:Hello default}")
	private String role;

	// @RequestMapping("/{idUser}")
	@GetMapping("user/{idUser}")
	public User user(@PathVariable(value = "idUser", required = true, name = "idUser") String idUser) {
		long start = Calendar.getInstance().getTimeInMillis();
		_logger.info("[START]  Method  user: " + idUser + "Rol: " + role);
		User anUser = new User();
		anUser.setId(new Long(idUser));
		anUser.setName(role);
		_logger.info("[FINISH] Method user in " + (Calendar.getInstance().getTimeInMillis() - start) + " mls.");
		return anUser;
	}
}
