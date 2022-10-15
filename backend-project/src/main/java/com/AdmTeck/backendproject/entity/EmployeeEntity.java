package com.AdmTeck.backendproject.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Entity
@Table(name = "employees" , uniqueConstraints = {
        @UniqueConstraint(columnNames = {"emp_name"}),
        @UniqueConstraint(columnNames = {"emp_email"})
})
@Data
@NoArgsConstructor
@AllArgsConstructor
public class EmployeeEntity {

    @Id
    @Column(name = "emp_id")
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private Long id;

    @Column(name = "emp_name")
    private String username;

    @Column(name = "emp_gender")
    private String gender;

    @Column (name = "emp_dob")
    private Date dob;

    @Column (name = "emp_address")
    private String address;

    @Column (name = "emp_password")
    private String password;

    @Column (name = "emp_email")
    private String email;

    @ManyToMany(cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    @JoinTable(name = "postgres",
            joinColumns = @JoinColumn(name = "emp_id", referencedColumnName = "emp_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id", referencedColumnName = "role_id"))
    private Set<Roles> roles;
}