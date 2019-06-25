export const SET_TASKS = '[todo] SET_TASKS';
export const TOGGLE_LOADING = '[todo] TOGGLE_LOADING';
export const SET_ERROR = '[todo] SET_ERROR';

// action creator
export function setTasks(tasks) {
    return {
        type: SET_TASKS,
        payload: tasks
    }
}

// calling the server is done in the actions

export function toggleIsLoading(isLoading) {
    return {
        type: TOGGLE_LOADING,
        payload: isLoading
    }
}

export function setError(error) {
    return {
        type: SET_ERROR,
        payload: error
    }
}

/**
 * get the tasks from our server
 * store.dispatch(fetchTasks()) ==
 * store.dispatch(action)
 *
 * if the action is {type: ....}
 * else
 * if the action is function then thunk will call it with store dispatch
 */
export function fetchTasks() {
    return async function(dispatch) {
        dispatch(toggleIsLoading(true));
        try {
            const response = await fetch('https://nztodo.herokuapp.com/api/task/?format=json')
            const todoTasks = await response.json();
            dispatch(setTasks(todoTasks));
        } catch(error) {
            dispatch(setError(error));
        }
        dispatch(toggleIsLoading(false));



        // fetch('https://nztodo.herokuapp.com/api/task/?format=json').then(
        //     (response) => {
        //         response.json().then((todoTasks) => {
        //
        //         })
        //     }
        // );
    }
}
