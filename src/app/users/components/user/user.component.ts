import { UserModel } from './../../../shared/models/user.model';
import { loadingUser } from './../../../store/actions/user.actions';
import { AppState } from './../../../store/app.reducers';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [],
})
export class UserComponent implements OnInit {
  user: UserModel | null = null;
  loading: boolean = false;
  error: null = null;
  constructor(private router: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('user').subscribe(({ user, error, loading }) => {
      this.user = user;
      this.loading = loading;
      this.error = error;
    });
    this.router.params.subscribe(({ id }) => {
      this.store.dispatch(loadingUser({ id }));
    });
  }
}
