package com.POS_system_backend.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Entity
@Data
@Table(name = "trial_accounts")
public class TrialAccount {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String businessName;
    private String ownerName;

    @Column(unique = true)
    private String email;

    private String mobile;
    private String password; // Hashed

    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private boolean isActive;

    private String plan;
    private int maxBranches;
    private int maxUsers;

    @PrePersist
    protected void onCreate() {
        this.startDate = LocalDateTime.now();
        this.endDate = LocalDateTime.now().plusDays(7); // 7 Days Trial
        this.isActive = true;
        this.plan = "TRIAL";
        this.maxBranches = 1;
        this.maxUsers = 1;
    }
}