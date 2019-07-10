package com.jbm.bbcron.domain;

import javax.ws.rs.Produces;

import org.springframework.data.annotation.Id;

import io.swagger.annotations.Api;
@Api(value = "/user")
@Produces({"application/json", "application/xml"})
public class User {

	@Id
	public Long id;

	public String name;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	
	
}
