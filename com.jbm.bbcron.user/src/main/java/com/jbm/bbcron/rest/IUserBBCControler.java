package com.jbm.bbcron.rest;

import javax.ws.rs.PathParam;

import org.springframework.web.bind.annotation.RequestMapping;

import com.jbm.bbcron.domain.User;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;

@Api(value = "/user", consumes = "application/json, application/xml")
public interface IUserBBCControler {

	@ApiOperation(response = User.class, consumes = "application/json, application/xml", tags = "User", value = "idUser")
	@RequestMapping("/{idUser}")
	public User user(
			@PathParam("idUser") @ApiParam(value = "idUser", defaultValue = "0", required = true) String idUser);
}
