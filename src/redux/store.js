import { createStore } from 'redux';
import { newTaskReducer } from './newtask/taskReducer';

const store = createStore(newTaskReducer);

export default store;