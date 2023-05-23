import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehicleForm1Component } from './vehicle-form1/vehicle-form1.component';
import { VehicleForm2Component } from './vehicle-form2/vehicle-form2.component';

@NgModule({
  declarations: [
    AppComponent,
    VehicleForm1Component,
    VehicleForm2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
