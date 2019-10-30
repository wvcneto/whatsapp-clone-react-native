import { MODIFY_ADD_EMAIL } from '../actions/Types';

const INITIAL_STATE = {
  addEmail: '',
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch(action.type){
    case MODIFY_ADD_EMAIL:
      return {...state, addEmail: action.payload};
    default:
      return state;
  }
};