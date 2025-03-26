import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-q3',
  imports: [CommonModule],
  templateUrl: './q3.component.html',
  styleUrl: './q3.component.css'
})
export class Q3Component {
   employeedetails:any;
   showdetails=true;
   allemployee:any[]=[];
   constructor(private empservice:EmployeeService){
    this.allemployee=this.empservice.getallemployees();
   }
   displayEmployeedetails(empid:number){
    console.log(empid);
    this.employeedetails=this.empservice.getemployeeinfo(empid);
    this.showdetails=true;
   }
   hidedetails(){
    this.showdetails=false;
   }
}
