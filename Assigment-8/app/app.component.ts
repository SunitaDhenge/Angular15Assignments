import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public title:string  = "Assignment 8";

    checkLink(link:string):boolean
    {
      if(link.toLowerCase()=="logoff")
        return (sessionStorage.getItem("AUTH_TOKEN") != null);
      else if(link.toLowerCase()=="admin")
      return (sessionStorage.getItem("UserID")?.toLowerCase() =="admin");
      else
        return true;
    }
    getUser():string
    {
      return sessionStorage.getItem("UserID") ?? "";
    }
}
