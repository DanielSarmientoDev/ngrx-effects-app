import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, tap, map, catchError } from 'rxjs/operators';
import * as usersActions from '../actions/users.actions';
import { UserService } from '../../core/services/user.service';
import { of } from 'rxjs';
@Injectable()
export class usersEffects {
  constructor(private actions$: Actions, private usersService: UserService) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      // validate type action
      ofType(usersActions.loadingUsers),
      // merge observables
      mergeMap(() =>
        this.usersService.getUsers().pipe(
          // return map users
          map((users) => usersActions.loadingUsersSuccess({ users })),
          // catchError return only observables
          catchError((err) =>
            // of create observable
            of(usersActions.loadingUsersError({ payload: err }))
          )
        )
      )
    )
  );
}
