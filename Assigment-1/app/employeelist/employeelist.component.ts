import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  public count:number = 4;
  public  empsArray:any[]  =  [
    {  empno : 1001, ename:"Scott", job: "Manager", dept : 'Sales'  },
    {  empno : 1002, ename:"Smith", job: "Lead", dept : 'Sales' },
    {  empno : 1003, ename:"Sandy", job: "Programmer", dept : 'IT' },
    {  empno : 1004, ename:"Sam", job: "Tester", dept : 'QA'  } ,
    {  empno : 1005, ename:"Jack", job: "Manager", dept : 'Sales'  },
    {  empno : 1006, ename:"Billy", job: "Lead", dept : 'Sales'  },
    {  empno : 1007, ename:"James", job: "Programmer", dept : 'IT'  },
    {  empno : 1008, ename:"Sandy", job: "Tester", dept :'QA'  } ,
    {  empno : 1009, ename:"Doug", job: "Manager", dept : 'IT'  },
    {  empno : 1010, ename:"Brenda", job: "Lead", dept : 'IT'  },
    {  empno : 1011, ename:"June", job: "Programmer", dept : 'IT'  },
    {  empno : 1012, ename:"Justin", job: "Tester", dept : 'IT'  } 
  ];
  constructor() { }

  ngOnInit(): void {
  }
  reset(){ this.count=4;}
  load(){this.count=this.count+4;  }
}
