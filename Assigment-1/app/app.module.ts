import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GradePipe } from './gender.pipe';
import { EmployeeComponent } from './employee/employee.component';
import { GradeComponent } from './grade/grade.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { RangePipe } from './range.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GradePipe,
    EmployeeComponent,
    GradeComponent,
    FilterPipe,
    EmployeelistComponent,
    RangePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
