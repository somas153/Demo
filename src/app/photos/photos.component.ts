import { Component, OnInit } from '@angular/core';
import { HttpClient}from '@angular/common/http';
import { Router }from '@angular/router';
import { Title}from "@angular/platform-browser";
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
public photos;
public ids=[];
public totalData=[];
  constructor(private router:Router,private http:HttpClient,private titleser:Title) { 
    this.titleser.setTitle("photos")
  }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/photos').subscribe(data=>{
      this.photos=data;
      console.log(data);
      for (var i = 0; i < this.photos.length; i++) {
        this.ids.push(this.photos[i]._id)
      }
      console.log(this.photos, this.ids)
    })
    setTimeout(() => {
      ​
      ​
            for (var j = 0; j < this.ids.length; j++) {
              this.http.get('https://jsonplaceholder.typicode.com/photos/' + this.ids[j]).subscribe(data => {
                console.log(data)
                this.totalData.push(data)
                console.log(this.totalData)
              })
            }
          }, 2000);
        }
        tonextPage(data) {
          console.log('1', data)
          localStorage.setItem('newsData', JSON.stringify(data))
          this.router.navigateByUrl('photos1')
        }

}
