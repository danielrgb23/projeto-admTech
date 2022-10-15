package com.AdmTeck.backendproject.repository;


import com.AdmTeck.backendproject.entity.Roles;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface EmployeeRoles extends JpaRepository<Roles, Long> {
    Optional<Roles> findByUsername(String username);
}
