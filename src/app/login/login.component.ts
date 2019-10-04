import { Component, OnInit } from '@angular/core';
import { HttpClient}from '@angular/common/http';
import { Router }from '@angular/router';
import { Title}from "@angular/platform-browser";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
  "email":any;
  "password":any;
  constructor(private router:Router,private http:HttpClient,private titleser:Title) {
         this.titleser.setTitle("login")
         
   }

  ngOnInit() {
  }
  login(){
    let body={
      "email":this.email,
      "password":this.password
    }
    console.log(body)
    this.http.post("https://reqres.in/api/users",body).subscribe(data=>{
      console.log(data)
     alert("successfully Login");
     this.router.navigateByUrl('dash')
      
    })
}
}