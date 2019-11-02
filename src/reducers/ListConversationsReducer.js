import { LIST_CONVERSATIONS } from '../actions/Types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LIST_CONVERSATIONS:
            return action.payload
        default:
            return state;
    }
}