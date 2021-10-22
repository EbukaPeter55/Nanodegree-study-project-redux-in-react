import API from 'goals-todos-api';


export const RECEIVE_DATA = 'RECEIVE-DATA';

function receiveData (todos, goals) {
    return {
        type: RECEIVE_DATA,
        todos,
        goals
    }
}

// Action creator using thunk to get initial data
export function handleInitialData () {
    return (dispatch) => {
             // Get all todos and goals from the simulated database
            return Promise.all(
                [
                    API.fetchGoals(),
                    API.fetchTodos()
            ]
            ).then(([todos, goals]) => {
                dispatch(receiveData(todos, goals))
                // console.log(['Todos', todos]);
                // console.log(['Goals', goals]);
            })
    }
}