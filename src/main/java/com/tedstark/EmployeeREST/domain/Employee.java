package com.tedstark.EmployeeREST.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Employee {

    @Id
    private int id;

    @Column
    private int fakeid;

    @Column
    private String fname;

    @Column
    private String lname;

    @Column
    private String position;

    @Column
    private int salary;

    protected Employee(){}

    public Employee(int id, int fakeid, String fname, String lname, String position, int salary) {
        this.id = id;
        this.fakeid = fakeid;
        this.fname = fname;
        this.lname = lname;
        this.position = position;
        this.salary = salary;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getFakeid() {
        return fakeid;
    }

    public void setFakeid(int fakeid) {
        this.fakeid = fakeid;
    }

    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public String getLname() {
        return lname;
    }

    public void setLname(String lname) {
        this.lname = lname;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public int getSalary() {
        return salary;
    }

    public void setSalary(int salary) {
        this.salary = salary;
    }
}
