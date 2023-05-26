import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';  
import { filter } from 'rxjs/operators';  
@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component implements OnInit {
  age:number=0;
  person:any[]=[];
  msg:string="";
  source = from([  
    { name: 'Alex', age: 32 },  
    { name: 'Akira', age: 25 },  
    { name: 'Aisha', age: 23 },  
    { name: 'Anisha', age: 16 },  
    { name: 'Anisha', age: 19 },  
    { name: 'Alisha', age: 22 }  
  ]);  
  constructor() { }

  ngOnInit(): void {
  }
  buttonClick()
  {
    if(this.age>0)
      this.msg="Persons under the age of "+this.age;
    else 
    this.msg="";
    const example =  this.source.pipe(filter(person => person.age <= this.age));  
    this.person=[];
    example.subscribe(val=>{this.person.push(val)});
  }
}
