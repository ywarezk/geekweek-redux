// How do I do publish subscribe with Redux?

// who holds the state?
// store

const store = Redux.createStore(
    reducer,
    {
        msg: 'hello redux',
        user: null
    } 
)

store.subscribe(() => {
    // whenever the state is changing    
});

// { type: 'ACTION_THAT_HAPPENED', payload: additionalData}
store.dispatch(
    {
        type: 'SET_MESSAGE', 
        payload: 'what the user put in the form'
    } 
)

/**
 * what is the next state
 * @param {} currentState 
 * @param {*} action 
 */
function reducer(currentState, action) {
    switch(action.type) {
        case 'SET_MESSAGE':
            return {msg: action.payload}
        default:
            return currentState;
    }
}



