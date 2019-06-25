/**
 * reducer is a pure function
 * reducer(currentState, action) => newState
 * reducer contains a switch on the action.type
 * the state is immutable
 */

import {SET_MESSAGE} from "./actions";

const initialState = {
    // msg: 'the initial value',
    // tasks: [
    //     {title: 'buy soya milk', description: '...'},
    //     {title: 'buy soya milk', description: '...'}
    // ]

    messaging: {
        msg: 'the initial value'
    },
    todo: {
        tasks: []
    }
}

/**
 * returns new state
 * @param state
 * @param action
 */
export function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_MESSAGE:
            // the state is immutable
            //state['msg'] = action.payload; // Error!
            return {...state, msg: action.payload};
        // case '@init':
        //     return {
        //         msg: 'the initial value'
        //     }
        default:
            return state;
            // Error!
            //     return {
            //         msg: 'the initial value'
            //     }
    }
}