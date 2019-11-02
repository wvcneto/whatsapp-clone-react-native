import { LIST_CONVERSATION } from '../actions/Types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LIST_CONVERSATION:
            console.log('LIST_CONVERSATION');
            return action.payload
            
        default:
            return state;
    }
}