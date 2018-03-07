package com.tedstark.EmployeeREST.repo;

import com.tedstark.EmployeeREST.domain.Employee;
import org.springframework.data.repository.CrudRepository;

public interface EmpRepository extends CrudRepository<Employee, Integer>{
}
