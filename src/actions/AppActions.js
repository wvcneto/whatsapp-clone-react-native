import b64 from 'base-64';
import firebase from 'firebase';
import _ from 'lodash';

import { MODIFY_ADD_EMAIL, ADD_EMAIL_CONTACT, ADD_CONTACT_DONE, ADD_CONTACT_FAIL, LIST_USER_CONTACTS } from './Types';

export const modifyAddEmail = (text) => {
  console.log('Actions');
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
        if (snapshot.val()) { //email que queremos adicionar         
          const userData = _.first(_.values(snapshot.val()));
          //necessário o email do usurario que está altenticado
          const { currentUser } = firebase.auth(); // assignment destruction para pegar email do user logado
          let currentUserB64 = b64.encode(currentUser.email); //Converte b64 
          firebase.database().ref(`/user_contacts/${currentUserB64}`) // endereço no banco onde será salvo
            .push({ email, name: userData.name }) // salvar os dados
            .then(() => addContactDone(dispatch)) // em caso de sucesso
            .catch((erro) => addContactFail(erro.message, dispatch)) // em caso de falha

        } else {
          dispatch(
            { 
                type: ADD_CONTACT_FAIL, 
                payload: 'Unregistered email address!'
            }
        )
        }
      }) //promise da once / retorna o value do nó
  }
}

export const addContactDone = (dispatch) => (
  dispatch(
    {
      type: ADD_CONTACT_DONE,
      payload: true
    }
  )
);

export const addContactFail = (erro, dispatch) => (
  dispatch(
    {
      type: ADD_CONTACT_FAIL,
      payload: erro,
    }
  )
);

export const enableAddContact = () => (
  {
    type: ADD_CONTACT_DONE,
    payload: false
  }
);

export const contactsUserFetch = () => {
  const { currentUser } = firebase.auth();
  return(dispatch) => {
    let emailUserB64 = b64.encode( currentUser.email );

    firebase.database().ref(`/user_contacts/${emailUserB64}`)
      .on("value", (snapshot) => {
        dispatch({
          type: LIST_USER_CONTACTS,
          payload: snapshot.val()
        })
      })
  }
}
