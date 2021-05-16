import { UserModel } from './../../shared/models/user.model';
import { createAction, props } from '@ngrx/store';

export const loadingUsers = createAction('[LOAD USERS] LOADING USERS');

export const loadingUsersSuccess = createAction(
  '[LOAD USERS SUCCESS] LOAD USERS SUCCESS',
  props<{ users: UserModel[] }>()
);

export const loadingUsersError = createAction(
  '[LOAD USERS SUCCESS] LOAD USERS ERROR',
  props<{ payload: any }>()
);
