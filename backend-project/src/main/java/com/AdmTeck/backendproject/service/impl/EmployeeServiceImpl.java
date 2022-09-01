package com.AdmTeck.backendproject.service.impl;

import com.AdmTeck.backendproject.dto.mapper.EmployeeMapper;
import com.AdmTeck.backendproject.dto.request.EmployeeRequest;
import com.AdmTeck.backendproject.dto.response.EmployeeResponse;
import com.AdmTeck.backendproject.entity.EmployeeEntity;
import com.AdmTeck.backendproject.repository.EmployeeRepository;
import com.AdmTeck.backendproject.service.EmployeeService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepository employeeRepository;

    public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public EmployeeResponse findEmployeeById(Long id) {
        EmployeeEntity employeeEntity = employeeRepository.getById(id);
        return EmployeeMapper.MAPPER.bindDataEntityToResponse(employeeEntity);
    }

    @Override
    public List<EmployeeResponse> findEmployeeList() {
        List<EmployeeEntity> employeeEntities = employeeRepository.findAll();
        return EmployeeMapper.MAPPER.bindDataListToResponseList(employeeEntities);
    }

    @Override
    public EmployeeResponse createEmployee(EmployeeRequest employeeRequest) {
        EmployeeEntity employeeEntity = new EmployeeEntity();
        employeeEntity.setName(employeeRequest.getName());
        employeeEntity.setGender(employeeRequest.getGender());
        employeeEntity.setDob(employeeRequest.getDob());
        employeeEntity.setAddress(employeeRequest.getAddress());
        employeeEntity.setEmail(employeeRequest.getEmail());
        employeeEntity.setPassword(employeeRequest.getPassword());
        employeeRepository.save(employeeEntity);

        return EmployeeMapper.MAPPER.bindDataEntityToResponse(employeeEntity);
    }

    @Override
    public EmployeeResponse updateEmployee(Long id, EmployeeRequest employeeRequest) {

        Optional<EmployeeEntity> checkEmployee = employeeRepository.findById(id);
        if(checkEmployee.isPresent()){
            EmployeeEntity employeeEntity = new EmployeeEntity();
            employeeEntity.setId(id);
            employeeEntity.setName(employeeRequest.getName());
            employeeEntity.setGender(employeeRequest.getGender());
            employeeEntity.setDob(employeeRequest.getDob());
            employeeEntity.setAddress(employeeRequest.getAddress());
            employeeEntity.setEmail(employeeRequest.getEmail());
            employeeEntity.setPassword(employeeRequest.getPassword());
            employeeRepository.save(employeeEntity);

            return EmployeeMapper.MAPPER.bindDataEntityToResponse(employeeEntity);
        }

        return null;
    }

    @Override
    public void deleteEmployeeById(Long id) {
        employeeRepository.deleteById(id);
    }
}
