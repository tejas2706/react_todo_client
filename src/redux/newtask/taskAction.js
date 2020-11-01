import { ADD_TASK } from './taskTypes';

export const newTask = (todo) =>{
    console.log("newTask -> todo", todo)
    return {
        type: ADD_TASK,
        todo
    }
}
