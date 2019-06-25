import {createStore, combineReducers, applyMiddleware} from 'redux';
import {reducer} from "./reducer";
import {messagingReducer} from "./reducers/messaging.reducer";
import {todoReducer} from "./reducers/todo.reducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';



// middleware decorates: store.dispatch(...)
const store = createStore(
    combineReducers({
        messaging: messagingReducer,
        todo: todoReducer
    }),

    composeWithDevTools(
        applyMiddleware(thunk),
        // other store enhancers if any
    )

    // you can put middleware here


    // {
    //     milion:
    //     of :
    //     keys:
    //     ...
    //
    // }
);

export default store;