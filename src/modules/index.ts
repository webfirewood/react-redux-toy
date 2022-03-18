import {Todo} from "./todo/types";
import {combineReducers} from "redux";
import todo from "./todo/reducer";

export type RootState = {
    todo: Todo;
}

const rootReducer = combineReducers({
    todo,
})

export default rootReducer;
