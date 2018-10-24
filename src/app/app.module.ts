
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { RouterModule} from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';

// const appRoutes: Routes = [
//   {path: 'home' , component: HomeComponent},
//   {path : 'about' , component : AboutComponent},
//   {path :'user' , children:[
//     {path:'list' , component:UserListComponent}
//   ]},
//   {path : '' , redirectTo:'/home' , pathMatch: 'full'},
//   {path : '**' , redirectTo:'/home' , pathMatch: 'full'}
// ]

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    UserDetailsComponent
  ],  
  imports: [
    BrowserModule,
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
