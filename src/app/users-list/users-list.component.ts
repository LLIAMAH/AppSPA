import { Component, OnInit } from '@angular/core';
import { USERS, User } from './user-mock';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users = USERS;
  selectedUser: User;

  constructor() {}

  onSelect(user: User): void {
    this.selectedUser = user;
    alert(this.selectedUser.surname);
  }

  ngOnInit() {}
}
