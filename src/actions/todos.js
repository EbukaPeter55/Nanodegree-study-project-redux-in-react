import API from 'goals-todos-api';

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';



function addTodo (todo) {
    return {
        type: ADD_TODO,
        todo
    }
    }
    
function removeTodo (id) {
    return {
        type: REMOVE_TODO,
        id
    }
}

function toggleTodo (id) {
    return {
        type: TOGGLE_TODO,
        id
    }
}

// ASYNCHRONOUS THUNK
// Action creator for adding todo(thunk)
export function handleAddTodo (name, cb) {
    return (dispatch) => {
        return API.saveTodo(name)
            .then((todo) => {
                dispatch(addTodo(todo))
                cb()
            })
            .catch(()=> {
                alert('There was an error, try again.')
            })
    }
}

export function handleDeleteTodo (todo) {
    return (dispatch) => {
      // Using optimistic update, to enable the user gets an instant feedback
      dispatch(removeTodo(todo.id))
    
    return API.deleteTodo(todo.id)
    .catch(()=> {
 this.props.store.dispatch(addTodo(todo))
alert("An error occurred, try again.")
    })
    }
 
}

//Action creator for toggle(thunk)
export function handleToggle (id){
    return (dispatch) => {
    // Using optimistic updates to toggle todo and get instant feedback
    dispatch(toggleTodo(id))

return API.saveTodoToggle(id)
.catch(() => {
dispatch(toggleTodo(id))
alert("An error occurred, try again.")
})
    }
}
