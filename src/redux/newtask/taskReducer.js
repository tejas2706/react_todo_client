import { ADD_TASK } from './taskTypes';

let initialState = {
    todos:[]
}


export const newTaskReducer = (state=initialState, action) =>{
    console.log("newTaskReducer -> action.type", action.type)
    switch(action.type) {
        case ADD_TASK: {
            console.log("newTaskReducer -> action", action)
            state.todos.push(action.todo);
            console.log("newTaskReducer -> state", state)
            return {...state};
            // break;
        }
        default: {
            console.log("No case found");
            return state;
        }
    }
}