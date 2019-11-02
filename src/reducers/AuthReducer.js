import { 
  MODIFY_NAME,
  MODIFY_EMAIL,
  MODIFY_PASSWORD,
  REGISTER_DONE,
  REGISTER_FAIL,
  AUTH_DONE, AUTH_FAIL,
  LOADING_INDICATOR
} from '../actions/Types';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
  erro: '',
  loading: false,
}

// o state jamais é definido diretamente (a single source of truth)

export default (state = INITIAL_STATE, action) => {
  //console.log(action);
  switch(action.type){
    case MODIFY_NAME:
      return {...state, name: action.payload}; 
      // operador spread(...) permite "espalhar" elementos de um array/object[babel]

    case MODIFY_EMAIL:
      return {...state, email: action.payload}; 
      // evolui state por meio do spread + payload da action

    case MODIFY_PASSWORD:
      return {...state, password: action.payload}; 
      // altera password sem alterar as demais keys (clona todas e altera especifica)
    case REGISTER_DONE:
      return {...state,name: '', password: '', erro: '', loading: false};
      // Apagar a senha para a tela do login
    case REGISTER_FAIL:
      return {...state, erro: action.payload, password: '', loading: false};
      // Altera a mensagem de erro
    case AUTH_DONE:
      return {...state, erro: '', loading: false,email: '', password: ''};
      // Altera a mensagem de erro  
    case AUTH_FAIL:
      return {...state, erro: action.payload, password: '', loading: false};
      // Altera a mensagem de erro  
    case LOADING_INDICATOR:
      return {...state, loading: true};
  }
  return state;
}