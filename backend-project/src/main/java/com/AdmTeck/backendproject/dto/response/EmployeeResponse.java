package com.AdmTeck.backendproject.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmployeeResponse implements Serializable {
    private Long id;
    private String username;
    private String gender;
    private Date dob;
    private String address;
    private String email;
}
