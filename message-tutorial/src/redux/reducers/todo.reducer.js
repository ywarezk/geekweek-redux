import {SET_ERROR, SET_TASKS, TOGGLE_LOADING} from "../actions/todo.actions";


const initialState = {
    tasks: [],
    isLoading: false,
    error: null
}

export function todoReducer(state = initialState, action) {
    switch(action.type) {
        case SET_TASKS:
            return {...state, tasks: action.payload};
        case SET_ERROR:
            return {...state, error: action.payload};
        case TOGGLE_LOADING:
            return {...state, isLoading: action.payload};
        default:
            return state;
    }
}