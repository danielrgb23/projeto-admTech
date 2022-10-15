package com.AdmTeck.backendproject.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Setter
@Getter
@Entity
@Table(name = "roles")
public class Roles {

    @Id
    @Column (name = "role_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column( name = "user_name", length = 60)
    private String username;
}
