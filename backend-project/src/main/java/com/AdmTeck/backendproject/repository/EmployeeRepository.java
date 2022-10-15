package com.AdmTeck.backendproject.repository;

import com.AdmTeck.backendproject.entity.EmployeeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface EmployeeRepository extends JpaRepository<EmployeeEntity, Long> {
    Optional<EmployeeEntity> findByEmail(String email);
    Optional<EmployeeEntity> findByUsernameOrEmail(String name, String email);
    Optional<EmployeeEntity> findByUsername(String username);
    Boolean existsByUsername(String username);
    Boolean existsByEmail(String email);

}
