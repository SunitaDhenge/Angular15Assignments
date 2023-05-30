import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent 
{
    uid:string  = "admin";
    pwd:string  = "admin123";
    result:string  = "";

    constructor(private router: Router, private activatedRoute:ActivatedRoute) { }
 
    loginButton_click():void
    {

      let reqUrl = this.activatedRoute.snapshot.queryParams["returnUrl"];

      if(reqUrl == null)
      {
        reqUrl = "/";
      }

      if ((this.uid == "admin"  && this.pwd == "admin123") ||
      (this.uid == "tester"  && this.pwd == "test123"))
      {
       sessionStorage.setItem("AUTH_TOKEN", this.uid);
       sessionStorage.setItem("UserID", this.uid);
       this.router.navigate([reqUrl]);
      }
      else
      {
        this.result  = "Invalid user id or password";
      }
    }
    showLogin():boolean
    {
      return (sessionStorage.getItem("AUTH_TOKEN") == null);
    }
      
     
}
