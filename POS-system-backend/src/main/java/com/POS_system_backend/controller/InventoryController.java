package com.POS_system_backend.controller;

import com.POS_system_backend.dto.InventoryDto;
import com.POS_system_backend.service.InventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/inventory")
public class InventoryController {

    @Autowired
    private InventoryService inventoryService;

    @PostMapping
    public ResponseEntity<InventoryDto> addInventory(@RequestBody InventoryDto inventoryDto) {
        InventoryDto createdInventory = inventoryService.addInventory(inventoryDto);
        return new ResponseEntity<>(createdInventory, HttpStatus.CREATED);
    }

    @PutMapping("/{inventoryId}")
    public ResponseEntity<InventoryDto> updateInventory(@PathVariable Long inventoryId, @RequestBody InventoryDto inventoryDto) {
        InventoryDto updatedInventory = inventoryService.updateInventory(inventoryId, inventoryDto);
        return new ResponseEntity<>(updatedInventory, HttpStatus.OK);
    }

    @DeleteMapping("/{inventoryId}")
    public ResponseEntity<String> deleteInventory(@PathVariable Long inventoryId) {
        inventoryService.deleteInventory(inventoryId);
        return new ResponseEntity<>("Inventory deleted successfully", HttpStatus.OK);
    }

    @GetMapping("/branch/{branchId}")
    public ResponseEntity<List<InventoryDto>> getInventoryByBranchId(@PathVariable Long branchId) {
        List<InventoryDto> inventory = inventoryService.getInventoryByBranchId(branchId);
        return new ResponseEntity<>(inventory, HttpStatus.OK);
    }

    @GetMapping("/branch/{branchId}/search")
    public ResponseEntity<List<InventoryDto>> searchInventoryByProductName(@PathVariable Long branchId, @RequestParam String productName) {
        List<InventoryDto> inventory = inventoryService.searchInventoryByProductName(branchId, productName);
        return new ResponseEntity<>(inventory, HttpStatus.OK);
    }

    @GetMapping("/branch/{branchId}/product/{productId}")
    public ResponseEntity<InventoryDto> getInventoryByBranchIdAndProductId(@PathVariable Long branchId, @PathVariable Long productId) {
        InventoryDto inventory = inventoryService.getInventoryByBranchIdAndProductId(branchId, productId);
        return new ResponseEntity<>(inventory, HttpStatus.OK);
    }
}
