import { Component, OnInit } from '@angular/core';
import { HttpClient}from '@angular/common/http';
import { Router }from '@angular/router';
import { Title}from "@angular/platform-browser";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
 public tasks;
  constructor(private router:Router,private http:HttpClient,private titleser:Title) { 
    this.titleser.setTitle("tasks")
  }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe(data=>{
      this.tasks=data;
      console.log(data)
    })
  }

}
