package com.POS_system_backend.service;

import com.POS_system_backend.dto.StoreRequest;
import com.POS_system_backend.entity.Store;
import com.POS_system_backend.entity.User;

import java.util.List;

public interface StoreService {
    Store createStore(StoreRequest req, User user);
    Store updateStore(Long storeId, StoreRequest req) throws Exception;
    void deleteStore(Long storeId) throws Exception;
    Store findStoreById(Long storeId) throws Exception;
    List<Store> getAllStores();
    List<Store> getStoresByAdmin(Long adminId);
    List<Store> getStoresByEmployee(Long employeeId);
}
