import { createAction, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import * as AppState from '../../state/app.state';
import * as UsersActions from './users.actions';

export interface State extends AppState.State {
  users: UserState;
}

export interface UserState {
  maskUserName: boolean;
  userName: string;
  password: string;
}

export const initialState: UserState = {
  maskUserName: false,
  userName: 'test@angular-university.io',
  password: '12345'  
}

const getUserFeatureState = createFeatureSelector<UserState>('users');

export const getMaskUserName = createSelector(getUserFeatureState, state => state.maskUserName);

export const getUserName = createSelector(getUserFeatureState, state => state.userName);

export const getPassword = createSelector(getUserFeatureState, state => state.password);

export const usersReducers = createReducer<UserState>(initialState,
on(UsersActions.maskUserNameActions,
 (state): UserState =>{
    console.log('[User] Mask User Name ' + JSON.stringify(state) );
    return {
       ...state,
       maskUserName: !state.maskUserName
    }
}));