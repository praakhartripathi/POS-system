package com.POS_system_backend.controller;

import com.POS_system_backend.dto.RefundDto;
import com.POS_system_backend.service.RefundService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/refunds")
public class RefundController {

    @Autowired
    private RefundService refundService;

    @PostMapping
    public ResponseEntity<RefundDto> createRefund(@RequestBody RefundDto refundDto) {
        RefundDto createdRefund = refundService.createRefund(refundDto);
        return new ResponseEntity<>(createdRefund, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<RefundDto>> getAllRefunds() {
        List<RefundDto> refunds = refundService.getAllRefunds();
        return new ResponseEntity<>(refunds, HttpStatus.OK);
    }

    @GetMapping("/cashier/{cashierId}")
    public ResponseEntity<List<RefundDto>> getRefundsByCashierId(@PathVariable Long cashierId) {
        List<RefundDto> refunds = refundService.getRefundsByCashierId(cashierId);
        return new ResponseEntity<>(refunds, HttpStatus.OK);
    }

    @GetMapping("/shift-report/{shiftReportId}")
    public ResponseEntity<List<RefundDto>> getRefundsByShiftReportId(@PathVariable Long shiftReportId) {
        List<RefundDto> refunds = refundService.getRefundsByShiftReportId(shiftReportId);
        return new ResponseEntity<>(refunds, HttpStatus.OK);
    }

    @GetMapping("/branch/{branchId}")
    public ResponseEntity<List<RefundDto>> getRefundsByBranchId(@PathVariable Long branchId) {
        List<RefundDto> refunds = refundService.getRefundsByBranchId(branchId);
        return new ResponseEntity<>(refunds, HttpStatus.OK);
    }

    @GetMapping("/{refundId}")
    public ResponseEntity<RefundDto> getRefundById(@PathVariable Long refundId) {
        RefundDto refund = refundService.getRefundById(refundId);
        return new ResponseEntity<>(refund, HttpStatus.OK);
    }

    @DeleteMapping("/{refundId}")
    public ResponseEntity<String> deleteRefund(@PathVariable Long refundId) {
        refundService.deleteRefund(refundId);
        return new ResponseEntity<>("Refund deleted successfully", HttpStatus.OK);
    }
}
