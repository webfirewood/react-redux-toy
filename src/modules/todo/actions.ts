import {deprecated} from "typesafe-actions";
import {IToDo} from "./types";


const {createStandardAction} = deprecated;
export const ADD_TODO = "todo/ADD_TODO";
export const DELETE_TODO = 'todo/DELETE_TODO';

export const addTodo = createStandardAction(ADD_TODO)<IToDo>();
export const deleteTodo = createStandardAction(DELETE_TODO)<IToDo>();
