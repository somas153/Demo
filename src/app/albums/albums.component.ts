import { Component, OnInit } from '@angular/core';
import { HttpClient}from '@angular/common/http';
import { Router }from '@angular/router';
import { Title}from "@angular/platform-browser";
@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  public albums;
  constructor(private router:Router,private http:HttpClient,private titleser:Title) { 
    this.titleser.setTitle("albums")
  }


  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/albums').subscribe(data=>{
      this.albums=data;
    })
  }
poto(){
  this.router.navigateByUrl('photos')
}
}
