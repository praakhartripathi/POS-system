package com.POS_system_backend.controller;

import com.POS_system_backend.dto.EmployeeDto;
import com.POS_system_backend.dto.UserDto;
import com.POS_system_backend.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @PostMapping("/store")
    public ResponseEntity<UserDto> createStoreEmployee(@RequestBody EmployeeDto employeeDto) {
        UserDto createdEmployee = employeeService.createStoreEmployee(employeeDto);
        return new ResponseEntity<>(createdEmployee, HttpStatus.CREATED);
    }

    @GetMapping("/store/{storeId}")
    public ResponseEntity<List<UserDto>> getEmployeesByStoreId(@PathVariable Long storeId) {
        List<UserDto> employees = employeeService.getEmployeesByStoreId(storeId);
        return new ResponseEntity<>(employees, HttpStatus.OK);
    }

    @PostMapping("/branch")
    public ResponseEntity<UserDto> createBranchEmployee(@RequestBody EmployeeDto employeeDto) {
        UserDto createdEmployee = employeeService.createBranchEmployee(employeeDto);
        return new ResponseEntity<>(createdEmployee, HttpStatus.CREATED);
    }

    @PutMapping("/{employeeId}")
    public ResponseEntity<UserDto> updateEmployee(@PathVariable Long employeeId, @RequestBody EmployeeDto employeeDto) {
        UserDto updatedEmployee = employeeService.updateEmployee(employeeId, employeeDto);
        return new ResponseEntity<>(updatedEmployee, HttpStatus.OK);
    }

    @DeleteMapping("/{employeeId}")
    public ResponseEntity<String> deleteEmployee(@PathVariable Long employeeId) {
        employeeService.deleteEmployee(employeeId);
        return new ResponseEntity<>("Employee deleted successfully", HttpStatus.OK);
    }

    @GetMapping("/branch/{branchId}")
    public ResponseEntity<List<UserDto>> getEmployeesByBranchId(@PathVariable Long branchId) {
        List<UserDto> employees = employeeService.getEmployeesByBranchId(branchId);
        return new ResponseEntity<>(employees, HttpStatus.OK);
    }
}
