import { loadingUser } from './../actions/user.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, tap, map, catchError } from 'rxjs/operators';
import * as actions from '../actions/index.actions';
import { UserService } from '../../core/services/user.service';
import { of } from 'rxjs';
@Injectable()
export class userEffects {
  constructor(private actions$: Actions, private usersService: UserService) {}

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      // validate type action
      ofType(actions.loadingUser),
      // merge observables
      mergeMap((action) =>
        this.usersService.getUser(action.id).pipe(
          // return map users
          map((user) => actions.loadingUserSuccess({ user })),
          // catchError return only observables
          catchError((err) =>
            // of create observable
            of(actions.loadingUserError({ payload: err }))
          )
        )
      )
    )
  );
}
