package com.POS_system_backend.service;

import com.POS_system_backend.dto.TrialSignupRequest;
import java.util.Map;

public interface TrialService {
    Map<String, Object> createTrialAccount(TrialSignupRequest request);
}