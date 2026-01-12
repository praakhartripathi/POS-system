package com.POS_system_backend.service;

import com.POS_system_backend.entity.User;

public interface AuthService {
    User createUser(User user) throws Exception;
    User findUserByEmail(String email) throws Exception;
    void updatePassword(String email, String newPassword) throws Exception;
    void forgotPassword(String email) throws Exception;
}
