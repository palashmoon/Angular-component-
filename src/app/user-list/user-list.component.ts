import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users = [
    {"id": 1 , "name" : 'john'},
    {"id" : 2 ,"name" : 'srk'},
    {"id" :3 , "name" : 'leonardo'}
  ];
  constructor(private router : Router) { }

  ngOnInit() {
  }
  onSelect(users){
    this.router.navigate(['/user' ,users.id])
  }
}
