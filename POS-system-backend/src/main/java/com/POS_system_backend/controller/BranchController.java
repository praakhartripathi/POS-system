package com.POS_system_backend.controller;

import com.POS_system_backend.dto.BranchDto;
import com.POS_system_backend.service.BranchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/branches")
public class BranchController {

    @Autowired
    private BranchService branchService;

    @PostMapping
    public ResponseEntity<BranchDto> createBranch(@RequestBody BranchDto branchDto) {
        BranchDto createdBranch = branchService.createBranch(branchDto);
        return new ResponseEntity<>(createdBranch, HttpStatus.CREATED);
    }

    @PutMapping("/{branchId}")
    public ResponseEntity<BranchDto> updateBranch(@PathVariable Long branchId, @RequestBody BranchDto branchDto) {
        BranchDto updatedBranch = branchService.updateBranch(branchId, branchDto);
        return new ResponseEntity<>(updatedBranch, HttpStatus.OK);
    }

    @DeleteMapping("/{branchId}")
    public ResponseEntity<String> deleteBranch(@PathVariable Long branchId) {
        branchService.deleteBranch(branchId);
        return new ResponseEntity<>("Branch deleted successfully", HttpStatus.OK);
    }

    @GetMapping("/store/{storeId}")
    public ResponseEntity<List<BranchDto>> getBranchesByStoreId(@PathVariable Long storeId) {
        List<BranchDto> branches = branchService.getBranchesByStoreId(storeId);
        return new ResponseEntity<>(branches, HttpStatus.OK);
    }

    @GetMapping("/{branchId}")
    public ResponseEntity<BranchDto> getBranchById(@PathVariable Long branchId) {
        BranchDto branch = branchService.getBranchById(branchId);
        return new ResponseEntity<>(branch, HttpStatus.OK);
    }
}
