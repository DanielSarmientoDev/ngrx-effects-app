import { UserModel } from './../../shared/models/user.model';
import {
  loadingUser,
  loadingUserSuccess,
  loadingUserError,
} from './../actions/user.actions';
import { createReducer, on } from '@ngrx/store';

export interface UserState {
  id: string | null;
  user: UserModel | null;
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const UserInitialState: UserState = {
  id: null,
  user: null,
  loaded: false,
  loading: false,
  error: null,
};

const _UserReducer = createReducer(
  UserInitialState,
  on(loadingUser, (state, { id }) => ({ ...state, loading: true, id })),
  on(loadingUserSuccess, (state, { user }) => ({
    ...state,
    loading: false,
    loaded: true,
    user: { ...user },
    error: null,
  })),
  on(loadingUserError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: {
      url: payload.url,
      name: payload.name,
      message: payload.message,
    },
  }))
);

export function UserReducer(state: any, action: any) {
  return _UserReducer(state, action);
}
