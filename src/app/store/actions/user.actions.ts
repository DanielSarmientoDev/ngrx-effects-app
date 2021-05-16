import { UserModel } from './../../shared/models/user.model';
import { createAction, props } from '@ngrx/store';

export const loadingUser = createAction(
  '[LOAD USER] LOADING USER',
  props<{ id: string }>()
);

export const loadingUserSuccess = createAction(
  '[LOAD USER SUCCESS] LOAD USER SUCCESS',
  props<{ user: UserModel }>()
);

export const loadingUserError = createAction(
  '[LOAD USER SUCCESS] LOAD USER ERROR',
  props<{ payload: any }>()
);
