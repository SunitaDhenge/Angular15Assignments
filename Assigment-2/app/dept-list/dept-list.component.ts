import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Dept } from '../models/dept/dept.module';


@Component({
  selector: 'app-dept-list',
  templateUrl: './dept-list.component.html',
  styleUrls: ['./dept-list.component.css']
})
export class DeptListComponent implements OnChanges {


  @Input() loc:string  = "";

  filteredArray:Dept[] = [];

  deptsArray:Dept[] = [
    {deptno : 10, dname : "Accounts",  loc :  "Hyd"} ,
    {deptno : 20, dname : "Sales",  loc :  "Pune"},
    {deptno : 30, dname : "Marketing",  loc :  "Mumbai"},
    {deptno : 10, dname : "Accounts",  loc :  "Hyd"} ,
    {deptno : 20, dname : "Sales",  loc :  "Pune"},
    {deptno : 30, dname : "Marketing",  loc :  "Mumbai"},
    {deptno : 10, dname : "Accounts",  loc :  "Hyd"} ,
    {deptno : 20, dname : "Sales",  loc :  "Pune"},
    {deptno : 30, dname : "Marketing",  loc :  "Mumbai"},
    {deptno : 10, dname : "Accounts",  loc :  "Hyd"} ,
    {deptno : 20, dname : "Sales",  loc :  "Pune"},
    {deptno : 30, dname : "Marketing",  loc :  "Mumbai"},
  ];
 

  ngOnChanges(): void {
    if(this.loc=="" || this.loc=="-1")
      this.filteredArray = this.deptsArray;
    else
      this.filteredArray = this.deptsArray.filter(item => item.loc == this.loc);
  }
  
  

}
