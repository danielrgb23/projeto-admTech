package com.AdmTeck.backendproject.dto.request;

import lombok.Data;

import java.io.Serializable;
import java.util.Date;

@Data
public class EmployeeRequest implements Serializable {
    private String username;
    private String gender;
    private Date dob;
    private String address;
    private String password;
    private String email;
}
