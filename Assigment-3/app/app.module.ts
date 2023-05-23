import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShadowDirective } from './shadow.directive';
import { IsAdminDirective } from './adminuser.directive';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    ShadowDirective,
    IsAdminDirective,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
