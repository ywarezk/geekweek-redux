import {SET_MESSAGE} from "../actions/messaging.actions";

const initialState = {
    msg: 'initial message'
}

export function messagingReducer(state = initialState, action) {
    switch(action.type) {
        case SET_MESSAGE:
            // the state is immutable
            //state['msg'] = action.payload; // Error!
            return {...state, msg: action.payload};
        default:
            return state;
    }
}