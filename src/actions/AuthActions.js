import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import b64 from 'base-64';

import { 
  MODIFY_NAME,
  MODIFY_EMAIL,
  MODIFY_PASSWORD,
  REGISTER_DONE,
  REGISTER_FAIL,
  AUTH_DONE, AUTH_FAIL,
  LOADING_INDICATOR
} from './Types';

export const modifyName = (text) => {
  return (
    {
      type: MODIFY_NAME,
      payload: text,
    }
  );
}

export const modifyEmail = (text) => {
  return (
    {
      type: MODIFY_EMAIL, // Key da action que define como será evoluida a aplicação/action.
      // dados a serem passados [payload] key/value para o reducer e então evoluir o estado da aplicação.
      payload: text,
    }
  );
}

export const modifyPassword = (text) => {
  return (
    {
      type: MODIFY_PASSWORD,
      payload: text,
    }
  );
}

export const registerUser = ({ name, email, password }) => { // Async
  return dispatch => {    
    //Registro de User no firebase
    firebase.auth().createUserWithEmailAndPassword(email, password)//Sync(ações do firebase) // Configurado em App
    .then(user => {

      dispatch({type: LOADING_INDICATOR}); // LOADING

      let emailB64 = b64.encode(email); // Transforma o email em (cript)base64

      firebase.database().ref(`/contacts/${emailB64}`) // Interpolação de string
      .push({ name }) // Referencia para chave de obj json
      .then(value => registerDone(dispatch)); // Passa resposta para callback

    }) // Promisses a serem executadas após a função em questão
    //.then() varios tipos de teste
    .catch(erro => registerFail(dispatch, erro)); // """""""""" Promisses e Callback

  }

}

export const registerDone = (dispatch) => { // Callback 
  dispatch({
    type: REGISTER_DONE
  });
  Actions.welcome();
}

export const registerFail = (dispatch, erro) => { // Callback
  dispatch ({
    type: REGISTER_FAIL,
    payload: erro.message,
  });
}

export const authUser = ({email, password}) => {  
  return dispatch => {  

    dispatch({type: LOADING_INDICATOR}); // LOADING

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(value => authDone(dispatch))
    .catch(erro => authFail(dispatch, erro));    
  }
}

export const authDone = (dispatch) => {
  dispatch({
    type: AUTH_DONE,
  });
  Actions.main();
}

export const authFail = (dispatch, erro) => {
  dispatch({
    type: AUTH_FAIL,
    payload: erro.message,
  });
}
