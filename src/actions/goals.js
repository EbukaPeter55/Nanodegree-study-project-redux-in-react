import API from 'goals-todos-api';

export const ADD_GOAL = 'ADD_GOAL';
export const REMOVE_GOAL = 'REMOVE_GOAL';

function addGoals (goal) {
        return {
            type: ADD_GOAL,
            goal
        }
        }

function removeGoal (id) {
        return {
            type: REMOVE_GOAL,
            id
        }
}


// THUNK
// Action creator for adding a goal (Thunk)
export function handleAddGoal (name, cb) {
    return (dispatch) => {
        return API.saveGoal(name)
                .then((goal) => {
                    dispatch(addGoals(goal))
                    cb()
                })
                .catch(()=> {
                    alert('There was an error, try again.')
                })
    }
    }
    
    //Action creator for deleting goal(thunk)
export function handleDeleteGoal (goal) {
     return (dispatch) => {
           dispatch(removeGoal(goal.id))
    
            return API.deleteGoal(goal.id)
            .catch(()=> {
            dispatch(addGoals(goal))
            alert("An error occurred, Try again.")
            })
     }
    }
    