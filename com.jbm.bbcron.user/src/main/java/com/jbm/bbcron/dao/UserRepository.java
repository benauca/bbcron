package com.jbm.bbcron.dao;

import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.repository.query.MongoEntityInformation;
import org.springframework.data.mongodb.repository.support.SimpleMongoRepository;

import com.jbm.bbcron.domain.User;

public class UserRepository extends SimpleMongoRepository<User, Long> {

	public UserRepository(MongoEntityInformation<User, Long> metadata, MongoOperations mongoOperations) {
		super(metadata, mongoOperations);
	}

}
