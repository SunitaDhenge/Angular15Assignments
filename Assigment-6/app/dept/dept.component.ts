import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DepartmentList } from '../data/dept';
import { Department } from '../model/dept';

@Component({
  selector: 'app-dept',
  templateUrl: './dept.component.html',
  styleUrls: ['./dept.component.css']
})
export class DeptComponent implements OnInit {
  tempDept?:Department;
  deptList:Department[]=[];
  deptListMaster:Department[]=DepartmentList;
  observableObj: Observable<Department>;

  constructor() {
    this.observableObj = new Observable((subscriber) => {
      this.tempDept=this.deptListMaster[this.deptList.length];
      subscriber.next(this.tempDept);
    });

  }
  ngOnInit(): void {
  }

  buttonClick() {
    this.observableObj.subscribe({
      next: (result: Department) => {
        this.addDept(result);
      },
      error: (error: any) => {
        console.log("Error from Observable: " + error);
      },
      complete: () => {
        console.log("Observable send all data.");
      }
    });
  }

  addDept(item:Department)
  {
    this.deptList.push(item);
  }
}
