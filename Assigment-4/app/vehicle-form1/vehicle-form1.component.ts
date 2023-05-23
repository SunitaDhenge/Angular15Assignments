import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-form1',
  templateUrl: './vehicle-form1.component.html',
  styleUrls: ['./vehicle-form1.component.css']
})
export class VehicleForm1Component implements OnInit {
  public  OwnerName:string   = "";
	public  ContactNumber:string   = "";
	public  OwnerEmail:string   = "";
	public  RegNumber:string   = "";
	public  Address:string   = "";

  constructor() { }

  ngOnInit(): void {
  }



  public submit_click():void
  {
      alert("Vehicle Details are registered.");
  }

}
