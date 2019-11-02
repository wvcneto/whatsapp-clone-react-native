import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer';
import AppReducer  from './AppReducer';
import ListContactsReducer  from './ListContactsReducer';
import ListConversationReducer from './ListConversationReducer';
import ListConversationsReducer from './ListConversationsReducer';


export default combineReducers({
  AuthReducer, // Chave/Valor == AuthReducer : AuthReducer
  AppReducer,
  ListContactsReducer,
  ListConversationReducer,
  ListConversationsReducer
});