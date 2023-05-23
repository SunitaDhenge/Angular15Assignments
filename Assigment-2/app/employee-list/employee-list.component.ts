import { Component, OnInit } from '@angular/core';
import { Dept, Employee, Job } from '../models/dept/dept.module';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  job:Job|null=null;
  jobList:Job[]=[
    {  jobno : -1, jobname: "All"} ,
    {  jobno : 11, jobname: "Manager"},
    {  jobno : 12, jobname: "Lead"},
    {  jobno : 13, jobname: "Programmer"},
    {  jobno : 14, jobname: "Tester"} ,

  ];


  constructor() {
    this.job=this.jobList[0];
   }

  ngOnInit(): void {
  }
  Click(j:Job)
  {
    this.job=j;
  }
  Change(e:Employee)
  {
    let j=this.jobList.filter(x=>x.jobno==e.jobno)[0];
    if(j!=undefined)
      this.job=j
  }
}

