package com.AdmTeck.backendproject.service;

import com.AdmTeck.backendproject.dto.request.EmployeeRequest;
import com.AdmTeck.backendproject.dto.response.EmployeeResponse;

import java.util.List;

public interface EmployeeService {
    EmployeeResponse findEmployeeById(Long id);
    List<EmployeeResponse> findEmployeeList();
    EmployeeResponse createEmployee(EmployeeRequest EmployeeRequest);
    EmployeeResponse updateEmployee(Long id, EmployeeRequest EmployeeRequest);
    void deleteEmployeeById(Long id);
}
