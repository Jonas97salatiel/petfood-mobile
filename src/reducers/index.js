import { userReducer } from './userReducer';
import { carrinhoReducer } from './carrinhoReducer';

import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  userState: userReducer,
  carrinhoState: carrinhoReducer

});