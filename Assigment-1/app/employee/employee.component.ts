import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public value:string  = '-1';
  public prop:string = 'deptno';
  public deptlist:number[]  = [];
  public joblist:string[]  = [];
  public  empsArray:any[]  =  [
    {  empno : 10256, ename:"Scott", job: "Manager", deptno : 10  },
    {  empno : 10257, ename:"Smith", job: "Lead", deptno : 20  },
    {  empno : 10258, ename:"Sandy", job: "Programmer", deptno : 30  },
    {  empno : 10259, ename:"Sam", job: "Tester", deptno : 40  } ,
    {  empno : 10256, ename:"Scott", job: "Manager", deptno : 10  },
    {  empno : 10257, ename:"Smith", job: "Lead", deptno : 20  },
    {  empno : 10258, ename:"Sandy", job: "Programmer", deptno : 30  },
    {  empno : 10259, ename:"Sam", job: "Tester", deptno : 40  } ,
    {  empno : 10256, ename:"Scott", job: "Manager", deptno : 10  },
    {  empno : 10257, ename:"Smith", job: "Lead", deptno : 20  },
    {  empno : 10258, ename:"Sandy", job: "Programmer", deptno : 30  },
    {  empno : 10259, ename:"Sam", job: "Tester", deptno : 40  } 
  ];
  ngOnInit(): void {
    
    this.empsArray.forEach(x=>{
      if(!this.deptlist || this.deptlist .indexOf(x.deptno) == -1 )
        {
          this.deptlist .push(x.deptno);
        }
      if(!this.joblist || this.joblist .indexOf(x.job) == -1 )
      {
        this.joblist .push(x.job);
      }
    });
    this.deptlist.push(-1);
    this.joblist.push('All');
  }
  Click(p:string,val:string | number)
  {
    this.prop=p;
    if(val.toString().toLowerCase()=='all') val=-1;
    this.value=val.toString();
  }
}
