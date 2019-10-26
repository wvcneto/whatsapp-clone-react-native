import firebase from 'firebase';

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

  //Registro de User no firebase
  firebase.auth().createUserWithEmailAndPassword(email, password)//Sync(ações do firebase) // Configurado em App
    .then(user => registerDone()) // Promisses a serem executadas após a função em questão
    //.then() varios tipos de teste
    .catch(erro => registerFail(erro)); // """""""""" Promisses e Callback

  return (
    {
      type: 'registerUser',
    }
  );
}

export const registerDone = () => { // Callback 
  console.log("Usuário cadastrado com sucesso!");
}

export const registerFail = (erro) => { // Callback
  console.log(erro);
}
