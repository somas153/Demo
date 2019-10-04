import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent} from './login/login.component';
import { TasksComponent } from './tasks/tasks.component';
import { PostsComponent } from './posts/posts.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';
import { Photos1Component } from './photos1/photos1.component';

import { from } from 'rxjs';

const routes: Routes = [
 {path:'',component:LoginComponent},
  {path:'dash',component:DashboardComponent},
  {path:'tasks',component:TasksComponent},
  {path:'posts',component:PostsComponent},
  {path:'albums',component:AlbumsComponent},
  {path:'photos',component:PhotosComponent},
  {path:'photos1',component:Photos1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
