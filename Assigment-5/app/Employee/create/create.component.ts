import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/service/employee.service';


@Component({
  selector: 'app-employee-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  @Output() create=new EventEmitter();
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      ename: ['', Validators.required],
      job: ['', Validators.required],
      salary: ['', [Validators.required, Validators.pattern('^[0-9]\\d*$')]],
      deptno: ['', [Validators.required, Validators.min(10), Validators.max(20)]],
    });
  }
  ngOnInit(): void {
  }
  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.form.value, null, 4));
    let item:Employee= {"empno":0,"ename":this.form.value.ename,"job":this.form.value.job,"sal":this.form.value.salary,"deptno":this.form.value.deptno};
    this.create.emit(item);
    this.onReset()
  }
  onReset() {
    this.submitted = false;
    this.form.reset();
  }
}
