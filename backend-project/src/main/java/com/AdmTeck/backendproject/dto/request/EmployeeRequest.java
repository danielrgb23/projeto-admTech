package com.AdmTeck.backendproject.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@NotNull
public class EmployeeRequest implements Serializable {
    private String name;
    private String gender;
    private Date dob;
    private String address;
    private String email;
    private String password;
}
