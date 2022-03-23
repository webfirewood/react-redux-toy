import {Todo, TodoAction} from "./types";
import {createReducer} from "typesafe-actions";
import {ADD_TODO, DELETE_TODO} from "./actions";
import produce from "immer";

const initState : Todo = {
    todo: [],
}

const todo = createReducer<Todo,TodoAction>(initState, {
    [ADD_TODO] : (state, action) =>
        produce(state, draft => {
            draft.todo.push({id: action.payload.id, todo: action.payload.todo});
        }),
    [DELETE_TODO] : (state, action) =>
        produce(state, draft => {
            const index = draft.todo.findIndex(item => item.id === action.payload.id);
            draft.todo.splice(index, 1);
        })
})

export default todo;
