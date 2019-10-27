import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import b64 from 'base-64';

export const modifyName = (text) => {
  return (
    {
      type: 'modify_name',
      payload: text,
    }
  );
}

export const modifyEmail = (text) => {
  return (
    {
      type: 'modify_email', // Key da action que define como será evoluida a aplicação/action.
      // dados a serem passados [payload] key/value para o reducer e então evoluir o estado da aplicação.
      payload: text,
    }
  );
}

export const modifyPassword = (text) => {
  return (
    {
      type: 'modify_password',
      payload: text,
    }
  );
}

export const registerUser = ({ name, email, password }) => { // Async

  return dispatch => {
    
  //Registro de User no firebase
  firebase.auth().createUserWithEmailAndPassword(email, password)//Sync(ações do firebase) // Configurado em App
  .then(user => {

    let emailB64 = b64.encode(email); // Transforma o email em (cript)base64

    firebase.database().ref(`/contacts/${emailB64}`) // Interpolação de string
      .push({ name }) // Referencia para chave de obj json
      .then(value => registerDone(dispatch)); // Passa resposta para callback

  }) // Promisses a serem executadas após a função em questão
  //.then() varios tipos de teste
  .catch(erro => registerFail(erro, dispatch)); // """""""""" Promisses e Callback

  }

}

export const registerDone = (dispatch) => { // Callback 
  dispatch({
    type: 'register_sucess'
  });
  Actions.welcome();
}

export const registerFail = (erro, dispatch) => { // Callback
  dispatch ({
    type: 'register_erro',
    payload: erro.message,
  });
}
