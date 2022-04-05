import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface IToDo {
    id: number;
    todo: string;
    isModify: boolean;
}

export type TodoAction = ActionType<typeof actions>;
export type Todo = {
    todo: Array<IToDo>;
};
