import { Component, OnInit } from '@angular/core';
import { Observable, from, map, of } from 'rxjs';
@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit {

  observableObj: Observable<any>;
  cities:string[]=[];
  constructor() {
    this.observableObj = of('Mumbai','Delhi','Bangalore','Hyderabad','Ahmedabad','Chennai',
    'Kolkata','Surat','Pune','Jaipur','Lucknow','Kanpur','Nagpur','Indore','Thane','Bhopal');
  }


  buttonClick() {

    this.observableObj.pipe( map(x => this.getUpperCase(x)) ).subscribe(resData => 
      {
        this.cities.push(resData);
      });
  }

  ngOnInit(): void {
  }
  getUpperCase(x:any):string{
    return x.toUpperCase();
  }
}
