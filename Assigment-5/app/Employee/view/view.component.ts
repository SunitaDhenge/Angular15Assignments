import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class EmployeeViewComponent implements OnInit {

  empsArray: Employee[] = [];

  constructor(private $master: EmployeeService) {

  }

  getDataButton_click() {
    this.empsArray = this.$master.getAllEmployees();
  }

  ngOnInit(): void {
  }
  addItem(item:Employee)
  {
    this.$master.AddEmp(item);
    this.getDataButton_click();
  }
  removeItem(item:Employee)
  {
    this.$master.RemoveEmp(item.empno);
    this.getDataButton_click();
    alert("Employee "+ item.empno +" deleted successfully.")
  }
}
