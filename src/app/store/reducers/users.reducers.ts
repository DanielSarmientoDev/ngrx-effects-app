import { UserModel } from './../../shared/models/user.model';
import {
  loadingUsers,
  loadingUsersSuccess,
  loadingUsersError,
} from './../actions/index.actions';
import { createReducer, on } from '@ngrx/store';

export interface UsersState {
  users: UserModel[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const usersInitialState: UsersState = {
  users: [],
  loaded: false,
  loading: false,
  error: null,
};

const _usersReducer = createReducer(
  usersInitialState,
  on(loadingUsers, (state) => ({ ...state, loading: true })),
  on(loadingUsersSuccess, (state, { users }) => ({
    ...state,
    loading: false,
    loaded: true,
    users: [...users],
  })),
  on(loadingUsersError, (state, { payload }) => ({
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

export function usersReducer(state: any, action: any) {
  return _usersReducer(state, action);
}
