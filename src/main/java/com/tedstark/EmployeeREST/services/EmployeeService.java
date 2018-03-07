package com.tedstark.EmployeeREST.services;

import com.tedstark.EmployeeREST.domain.Employee;
import com.tedstark.EmployeeREST.repo.EmpRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {
    private EmpRepository empRepository;

    @Autowired
    public EmployeeService(EmpRepository empRepository) {
        this.empRepository = empRepository;
    }

    public Employee createEmployee (int id, int fakeId, String fname, String lname, String position, int salary){
        return empRepository.save(new Employee(id,fakeId,fname,lname,position,salary));
    }
}
