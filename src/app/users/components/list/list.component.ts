import { AppState } from './../../../store/app.reducers';
import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/shared/models/user.model';
import { Store } from '@ngrx/store';
import { loadingUsers } from 'src/app/store/actions/users.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [],
})
export class ListComponent implements OnInit {
  users: UserModel[] = [];
  loading: boolean = false;
  error: any;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select('users').subscribe(({ users, loading, error }) => {
      this.users = users;
      this.loading = loading;
      this.error = error;
    });
    this.store.dispatch(loadingUsers());
  }
  getUser() {}
}
