import { MODIFY_ADD_EMAIL, ADD_EMAIL_CONTACT, ADD_CONTACT_FAIL, ADD_CONTACT_DONE } from '../actions/Types';

const INITIAL_STATE = {
  addEmail: '',
  erroAdd: '',
  emailContact: ''
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch(action.type){
    case MODIFY_ADD_EMAIL:
      return {...state, addEmail: action.payload};
    case ADD_EMAIL_CONTACT:
      return {...state, emailContact: action.payload};
    case ADD_CONTACT_DONE:
      return {...state, erroAdd: action.payload}
    case ADD_CONTACT_FAIL:
      return {...state, erroAdd: action.payload};
    default:
      return state;
  }
};