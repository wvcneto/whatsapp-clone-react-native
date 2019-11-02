import firebase from 'firebase';
import b64 from 'base-64';
import _ from 'lodash';

import {
    MODIFY_ADD_EMAIL,
    ADD_CONTACT_FAIL,
    ADD_CONTACT_DONE,
    LIST_USER_CONTACTS,
    MODIFY_MESSAGE,
    LIST_CONVERSATION,
    SEND_MESSAGE_DONE,
    LIST_CONVERSATIONS
} from './Types';

export const modifyAddEmail = text => {
    return {
        type: MODIFY_ADD_EMAIL,
        payload: text
    }
}

export const addEmailContact = email => {

    return dispatch => {
        let emailB64 = b64.encode(email);

        firebase.database().ref(`/contacts/${emailB64}`)
            .once('value')
            .then(snapshot => {
                if (snapshot.val()) {
                    //email do contato que queremos adicionar
                    const userData = _.first(_.values(snapshot.val()));
                    console.log(userData);

                    //email do usuário autenticado
                    const { currentUser } = firebase.auth();
                    let emailUserB64 = b64.encode(currentUser.email);

                    firebase.database().ref(`/user_contacts/${emailUserB64}`)
                        .push({ email, name: userData.name })
                        .then(() => addEmailContactDone(dispatch))
                        .catch(erro => addEmailContactErro(erro.message, dispatch));

                } else {
                    dispatch(
                        {
                            type: ADD_CONTACT_FAIL,
                            payload: 'Unregistered email address!'
                        }
                    );
                }
            })
    }
}

const addEmailContactErro = (erro, dispatch) => (
    dispatch(
        {
            type: ADD_CONTACT_FAIL,
            payload: erro
        }
    )
)

const addEmailContactDone = dispatch => (
    dispatch(
        {
            type: ADD_CONTACT_DONE,
            payload: true
        }
    )
)

export const allowAddContact = () => (
    {
        type: ADD_CONTACT_DONE,
        payload: false
    }
)

export const contactsUserFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        let emailUserB64 = b64.encode(currentUser.email);

        firebase.database().ref(`/user_contacts/${emailUserB64}`)
            .on("value", snapshot => {
                dispatch({ type: LIST_USER_CONTACTS, payload: snapshot.val() });
            })
    }
}

export const modifyMessage = text => {
    return ({
        type: MODIFY_MESSAGE,
        payload: text
    })
}

export const sendMessage = (message, contactName, contactEmail) => {
    //console.log("Mensagem:",message,", Nome:",contactName,", Email: ",contactEmail);
    const { currentUser } = firebase.auth();
    const userEmail = currentUser.email;

    return dispatch => {

        const userEmailB64 = b64.encode(userEmail);
        const contactEmailB64 = b64.encode(contactEmail);

        //registrar mensagem para contato e usuário
        firebase.database().ref(`/messages/${userEmailB64}/${contactEmailB64}`)
            .push({ message, type: 's' }) // tipo sended
            .then(() => {
                firebase.database().ref(`/messages/${contactEmailB64}/${userEmailB64}`)
                    .push({ message, type: 'r' }) // tipo received
                    .then(() => dispatch({ type: SEND_MESSAGE_DONE }));
            })
            .then(() => { //armazenar o header da conversa do usuário autenticado
                firebase.database().ref(`/user_conversations/${userEmailB64}/${contactEmailB64}`)
                    .set({ name: contactName, email: contactEmail });

            })
            .then(() => { //armazenar o cabeçalho de conversa do contato

                firebase.database().ref(`/contacts/${userEmailB64}`)
                    .once("value")
                    .then(snapshot => {

                        const userData = _.first(_.values(snapshot.val()));

                        firebase.database().ref(`/user_conversations/${contactEmailB64}/${userEmailB64}`)
                            .set({ name: userData.name, email: userEmail });
                    })
            })
    }

}

export const conversationUserFetch = contactEmail => {

    const { currentUser } = firebase.auth();

    //emails na base64
    let userEmailB64 = b64.encode(currentUser.email);
    let contactEmailB64 = b64.encode(contactEmail);

    return dispatch => {
        console.log('conversationUserFetch');
        firebase.database().ref(`/messages/${userEmailB64}/${contactEmailB64}`)
            .on("value", snapshot => {
                dispatch({ type: LIST_CONVERSATION, payload: snapshot.val() });
            });
    }
}

export const conversationsUserFetch = () => {
    const { currentUser } = firebase.auth();

    return dispatch => {
        let userEmailB64 = b64.encode(currentUser.email);

        firebase.database().ref(`/user_conversations/${userEmailB64}`)
            .on("value", snapshot => {
                dispatch({ type: LIST_CONVERSATIONS, payload: snapshot.val() });
            });
    }
}