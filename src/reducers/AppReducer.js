import { MODIFY_ADD_EMAIL, ADD_CONTACT_FAIL, ADD_CONTACT_DONE, MODIFY_MESSAGE } from '../actions/Types';

const INITIAL_STATE = {
  erroAdd: '',
  emailContact: '',
  successAdd: false,
  message: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MODIFY_ADD_EMAIL:
      return { ...state, emailContact: action.payload, erroAdd: '' };    
    case ADD_CONTACT_DONE:
      return { ...state, successAdd: action.payload, emailContact: '', erroAdd: '' }
    case ADD_CONTACT_FAIL:
      return { ...state, erroAdd: action.payload};
    case MODIFY_MESSAGE:
      return { ...state, message: action.payload};
    default:
      return state;
  }
};