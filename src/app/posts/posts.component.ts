import { Component, OnInit } from '@angular/core';
import { HttpClient}from '@angular/common/http';
import { Router }from '@angular/router';
import { Title}from "@angular/platform-browser";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
public posts;
userId;
id;
title;
body;
  constructor(private router:Router,private http:HttpClient,private titleser:Title) { 
    this.titleser.setTitle("posts")
  }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(data=>{
      this.posts=data;
      console.log(data)
    })
  }
comments(){
  let body={
    'userId':this.userId,
    'id':this.id,
    'title':this.title,
    'body':this.body
  }
  console.log(body)
  this.http.get('https://jsonplaceholder.typicode.com/posts/1').subscribe(data=>{
    console.log(data)
  })
}
}
