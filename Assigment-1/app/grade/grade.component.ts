import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css']
})
export class GradeComponent implements OnInit {
  public  usersArray:any[]  = 
  [
    {uname  :  "Scott",  grade:  1},
    {uname  :  "Abrons",  grade:  2},
    {uname  :  "Smith",  grade:  3},
    {uname  :  "James",   grade:  4},
    {uname  :  "Adam",   grade:  1},
    {uname  :  "Sathya",   grade:  2},
    {uname  :  "Maneesh",   grade:  3},
    {uname  :  "Haneesh",   grade:  4},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
