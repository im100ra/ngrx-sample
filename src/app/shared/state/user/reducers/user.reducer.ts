import { createReducer, on } from '@ngrx/store';
import { User } from '../user.model';
import * as UserActions from '../actions/user.action';
export const initalState: User[] = JSON.parse(
  localStorage.getItem('user') || '[]'
);

export const userReducer = createReducer(
  initalState,
  on(UserActions.userAddAction, (state, user) => {
    localStorage.setItem('user', JSON.stringify([...state, user]));
    return [...state, user];
  })
);
