package com.AdmTeck.backendproject.controller;

import com.AdmTeck.backendproject.dto.request.EmployeeRequest;
import com.AdmTeck.backendproject.dto.response.EmployeeResponse;
import com.AdmTeck.backendproject.service.EmployeeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "employee")
public class EmployeeController {

    private final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @GetMapping("/{id}")
    public EmployeeResponse findEmployeeById(@PathVariable("id") Long id) {
        return employeeService.findEmployeeById(id);
    }

    @GetMapping
    public List<EmployeeResponse> findEmployeeList(){
        return employeeService.findEmployeeList();
    }

    @PostMapping
    public EmployeeResponse createEmployee(@RequestBody EmployeeRequest employeeRequest){
        return employeeService.createEmployee(employeeRequest);
    }

    @PutMapping("/{id}")
    public EmployeeResponse updateEmployee(@PathVariable("id") Long id, @RequestBody EmployeeRequest employeeRequest) {
        return employeeService.updateEmployee(id, employeeRequest);
    }

    @DeleteMapping("/{id}")
    public void deleteEmplçyeeById(@PathVariable("id") Long id){
        employeeService.deleteEmployeeById(id);
    }

}
