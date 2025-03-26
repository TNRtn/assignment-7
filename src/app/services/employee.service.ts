import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees = [
    { employeeID: 1, name: 'TNR', email: 'tnr@example.com' },
    { employeeID: 2, name: 'NKR', email: 'nkr@example.com' },
    { employeeID: 3, name: 'dheeraj', email: 'dheeraj@example.com' }
  ];
  getemployeeinfo(employeeid:number){
    return this.employees.find(emp=>emp.employeeID===employeeid);
  }
  getallemployees(){
    return this.employees;
  }
}
