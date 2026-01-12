package com.POS_system_backend.service;

import com.POS_system_backend.entity.User;

public interface UserService {
    User findUserByJwtToken(String jwt) throws Exception;
    User findUserByEmail(String email) throws Exception;
}
