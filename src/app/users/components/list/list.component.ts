import { UserService } from './../../../core/services/user.service';
import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [],
})
export class ListComponent implements OnInit {
  users: UserModel[] = [];
  constructor(private user: UserService) {}

  ngOnInit() {
    this.user.getUsers().subscribe((users) => {
      console.log(users);
      this.users = users;
    });
  }
  getUser() {}
}
