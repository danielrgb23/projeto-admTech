package com.AdmTeck.backendproject.dto.mapper;

import com.AdmTeck.backendproject.dto.response.EmployeeResponse;
import com.AdmTeck.backendproject.entity.EmployeeEntity;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper
public interface EmployeeMapper {
    EmployeeMapper MAPPER = Mappers.getMapper(EmployeeMapper.class);
    EmployeeResponse bindDataEntityToResponse(EmployeeEntity employeeEntity);
    List<EmployeeResponse> bindDataListToResponseList(List<EmployeeEntity> employeeEntityList);
}
