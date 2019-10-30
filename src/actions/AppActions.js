import b64 from 'base-64';
import firebase from 'firebase';
import { MODIFY_ADD_EMAIL, ADD_EMAIL_CONTACT, ADD_CONTACT_DONE, ADD_CONTACT_FAIL } from './Types';

export const modifyAddEmail = (text) => {
  //console.log('Actions');
  return {
    type: MODIFY_ADD_EMAIL,
    payload: text,
  }
}

export const addEmailContact = (email) => {
  //console.log(email);

  return dispatch => {
    let emailB64 = b64.encode(email); // Converte para b64 pois não pode haver caracter especial (@)

    firebase.database().ref(`/contacts/${emailB64}`) // Recupera dado (snapshot)
      .once('value')//on()escuta alterações no path / once() apenas realiza uma requisição / value recupera um snapshot daquele momento
      .then(snapshot => {
        if (snapshot.val()) {
          addContactDone(dispatch);
        } else {
          addContactFail(dispatch);
        }
      }) //promise da once / retorna o value do nó
  }
}

export const addContactDone = (dispatch) => {
  dispatch({
    type: ADD_CONTACT_DONE,
    payload: ''
  });
}

export const addContactFail = (dispatch) => {
  dispatch({
    type: ADD_CONTACT_FAIL,
    payload: 'Usuário não cadastrado.'
  });
}
