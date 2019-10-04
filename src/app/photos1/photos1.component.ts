import { Component, OnInit } from '@angular/core';
import { HttpClient}from '@angular/common/http';
import { Router }from '@angular/router';
import { Title}from "@angular/platform-browser";
@Component({
  selector: 'app-photos1',
  templateUrl: './photos1.component.html',
  styleUrls: ['./photos1.component.css']
})
export class Photos1Component implements OnInit {
photos1;
  constructor(private router:Router,private http:HttpClient,private titleser:Title) { 
    this.titleser.setTitle("photos1")
  }

  ngOnInit() {this.http.get('https://jsonplaceholder.typicode.com/photos').subscribe(data=>{
    this.photos1=data;
    console.log(data);
  })
  }

}
