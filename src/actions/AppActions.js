import {MODIFY_ADD_EMAIL} from './Types';

export const modifyAddEmail = (text) => {
  console.log('Actions');
  return {
    type: MODIFY_ADD_EMAIL,
    payload: text,
  }
}