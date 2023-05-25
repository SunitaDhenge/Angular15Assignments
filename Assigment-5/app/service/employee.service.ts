import { Injectable } from '@angular/core';
import { EmployeeList } from '../data/employee';
import { Employee } from '../models/employee';

@Injectable( )
export class EmployeeService {

  empDataArray:Employee[] = [];

  constructor() {
      this.empDataArray = EmployeeList;
   }

  public getAllEmployees():Employee[]
  {
    return this.empDataArray;
  }

  public getEmployeeById(id:number) : Employee | undefined
  {    
    return this.empDataArray.find(item => item.empno == id);   
  }
  public AddEmp(item:Employee):boolean
  {
    try
    {
      let id:number=Math.max.apply(Math, this.empDataArray.map(function(o) { return o.empno; }))+1;
        item.empno=id;
        this.empDataArray.push(item);
        return true;
    }
    catch(ex)
    {
        return false;
    }
  }
  public RemoveEmp(no:number):boolean
  {
    let index=this.empDataArray.findIndex(x=>x.empno==no);
    if(index>=0)
    {
        this.empDataArray.splice(index,1);
        return true;
    }
    else
    {
        return false;
    }
  }
}