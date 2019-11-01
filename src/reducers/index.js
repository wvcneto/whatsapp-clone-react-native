import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer';
import AppReducer  from './AppReducer';
import ListContactsReducer  from './ListContactsReducer';


export default combineReducers({
  AuthReducer, // Chave/Valor == AuthReducer : AuthReducer
  AppReducer,
  ListContactsReducer
});