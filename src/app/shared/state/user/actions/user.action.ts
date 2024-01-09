import { createAction, props } from '@ngrx/store';
import { User } from '../user.model';

export const userAddAction = createAction('[User] Add', props<User>());
export const userRemoveAction = createAction(
  '[User] Remove',
  props<{ id: number }>()
);
