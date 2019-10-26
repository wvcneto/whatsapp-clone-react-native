export const modifyName = (text) => {
  return(
    {
      type: 'modify_name',
      payload: text,
    }
  );
}

export const modifyEmail = (text) => {
  return(
    {
      type: 'modify_email', // Key da action que define como será evoluida a aplicação/action.
      // dados a serem passados [payload] key/value para o reducer e então evoluir o estado da aplicação.
      payload: text,
    }
  );
}

export const modifyPassword = (text) => {
  return(
    {
      type: 'modify_password',
      payload: text,
    }
  );
}
