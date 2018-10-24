import { UserDetailsComponent } from './user-details/user-details.component';

import { NgModule } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
//import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    {path: 'home' , component: HomeComponent},
    {path : 'about' , component : AboutComponent},
    {path:'user-list' , component:UserListComponent},
    {path : 'user-list/:id' , component:UserDetailsComponent},
    {path : '' , redirectTo:'/home' , pathMatch: 'full'},
    {path : '**' , redirectTo:'/home' , pathMatch: 'full'}
  ]

  @NgModule({
      imports:[
        RouterModule.forRoot(appRoutes)
      ],
      exports:[
          RouterModule
      ]
  })

  export class AppRoutingModule{}
  export const routingComponent = [ HomeComponent, 
    AboutComponent,
    UserListComponent,UserDetailsComponent]

