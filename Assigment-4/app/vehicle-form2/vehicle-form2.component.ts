import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vehicle-form2',
  templateUrl: './vehicle-form2.component.html',
  styleUrls: ['./vehicle-form2.component.css']
})
export class VehicleForm2Component implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      ownerName: ['', Validators.required],
      contactNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      ownerEmail: ['', [Validators.required, Validators.email]],
      regNumber: ['', [Validators.required, Validators.pattern('^[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$')]],
      address: ['', Validators.required],
      model: ['', [Validators.required, Validators.minLength(10)]],
      color: ['', Validators.required],
      year: ['', [Validators.min(2012), Validators.max(2022)]],
    });
  }
  ngOnInit(): void {

  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}



// custom validator to check that two fields match
function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
      // return if another validator has already found an error on the matchingControl
      return;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  }
}
