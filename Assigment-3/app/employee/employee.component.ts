import { Component, OnInit } from '@angular/core';
import { Employee, Job } from '../models/employee.module';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  jobList:Job[]=[
    {  jobno : -1, jobname: "All"} ,
    {  jobno : 11, jobname: "Manager"},
    {  jobno : 12, jobname: "Admin"},
    {  jobno : 13, jobname: "Programmer"},
    {  jobno : 14, jobname: "Tester"} ,

  ];
  empList:Employee[] = [
    {  empno : 1001, ename:"Scott", jobno: 12, deptno : 1  },
    {  empno : 1002, ename:"Smith", jobno: 12, deptno : 1 },
    {  empno : 1003, ename:"Sandy", jobno: 13, deptno : 2 },
    {  empno : 1004, ename:"Sam", jobno: 12, deptno : 3  } ,
    {  empno : 1005, ename:"Jack", jobno: 11, deptno : 1  },
    {  empno : 1006, ename:"Billy", jobno: 12, deptno : 1  },
    {  empno : 1007, ename:"James", jobno: 13, deptno : 2  },
    {  empno : 1008, ename:"Sandy", jobno: 14, deptno :3  } ,
    {  empno : 1009, ename:"Doug", jobno: 11, deptno : 2  },
    {  empno : 1010, ename:"Brenda", jobno: 12, deptno : 2  },
    {  empno : 1011, ename:"June", jobno: 13, deptno : 2  },
    {  empno : 1012, ename:"Justin", jobno: 14, deptno : 2  } 
  ];
  constructor() { }

  ngOnInit(): void {
  }
  getJobName(jobno:number):string{
    let j=this.jobList.filter(x=>x.jobno==jobno)[0];
    if(j!=null)
      return j.jobname;
    else
      return "";
  }

}
