import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Dept, Employee, Job } from '../models/dept/dept.module';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  @Input() job:Job|null=null;
  @Output() click= new EventEmitter();
  jobList:Job[]=[
    {  jobno : -1, jobname: "All"} ,
    {  jobno : 11, jobname: "Manager"},
    {  jobno : 12, jobname: "Lead"},
    {  jobno : 13, jobname: "Programmer"},
    {  jobno : 14, jobname: "Tester"} ,

  ];
  deptList:Dept[]=[
    {  deptno : 1, dname: "Sales", loc:"Mumbai"},
    {  deptno : 2, dname: "IT", loc:"Mumbai"},
    {  deptno : 3, dname: "QA", loc:"Hyd"},

  ];
  empList:Employee[] = [
    {  empno : 1001, ename:"Scott", jobno: 11, deptno : 1  },
    {  empno : 1002, ename:"Smith", jobno: 12, deptno : 1 },
    {  empno : 1003, ename:"Sandy", jobno: 13, deptno : 2 },
    {  empno : 1004, ename:"Sam", jobno: 14, deptno : 3  } ,
    {  empno : 1005, ename:"Jack", jobno: 11, deptno : 1  },
    {  empno : 1006, ename:"Billy", jobno: 12, deptno : 1  },
    {  empno : 1007, ename:"James", jobno: 13, deptno : 2  },
    {  empno : 1008, ename:"Sandy", jobno: 14, deptno :3  } ,
    {  empno : 1009, ename:"Doug", jobno: 11, deptno : 2  },
    {  empno : 1010, ename:"Brenda", jobno: 12, deptno : 2  },
    {  empno : 1011, ename:"June", jobno: 13, deptno : 2  },
    {  empno : 1012, ename:"Justin", jobno: 14, deptno : 2  } 
  ];

  filteredArray:Employee[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(): void {
    if(this.job==null || this.job.jobno==-1)
      this.filteredArray = this.empList;
    else
      this.filteredArray = this.empList.filter(item => item.jobno == this.job?.jobno);
  }
  Click(e:Employee)
  {
    this.click.emit(e);
  }
  showButton():boolean
  {
    return (this.job==null || this.job.jobno==-1);
  }
  getDept(no:number):string
  {
    let item=this.deptList.filter(x=>x.deptno==no)[0];
    if(item==undefined) return "";
    return item.dname;
  }
  getJob(no:number):string
  {
    let item=this.jobList.filter(x=>x.jobno==no)[0];
    if(item==undefined) return "";
    return item.jobname;
  }
}
