import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import styled from 'styled-components';
import { BsTrash, FiEdit } from 'react-icons/all';
import { IToDo } from '../modules/todo/types';
import { deleteTodo, updateTodo } from '../modules/todo/actions';
import React, { FormHTMLAttributes, useState } from 'react';

const ToDoWrapper = styled.div``;

const ToDoItem = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid;
    border-radius: 15px;
    margin: 10px;
    padding: 10px;
    width: 50%;
`;

const ButtonWrapper = styled.div`
    svg {
        padding-left: 10px;
    }
`;

function ToDoList() {
    const todoList = useSelector((state: RootState) => state.todo.todo);
    const [todoValue, setTodoValue] = useState('');
    const dispatch = useDispatch();
    const onRemove = (item: IToDo) => {
        dispatch(deleteTodo(item));
    };
    const onModify = (item: IToDo) => {
        const newItem: IToDo = { ...item };
        if (todoValue !== '') {
            newItem.todo = todoValue;
            setTodoValue('');
        }
        dispatch(updateTodo(newItem));
    };
    const onChangeTodo = (e: React.ChangeEvent<HTMLInputElement>, item: IToDo) => {
        setTodoValue(e.target.value);
    };

    return (
        <ToDoWrapper>
            {todoList.map(item => (
                <ToDoItem key={item.id}>
                    {item.isModify ? <input type="text" defaultValue={item.todo} onChange={e => onChangeTodo(e, item)} /> : item.todo}
                    <ButtonWrapper>
                        <FiEdit onClick={() => onModify(item)} />
                        <BsTrash onClick={() => onRemove(item)} />
                    </ButtonWrapper>
                </ToDoItem>
            ))}
        </ToDoWrapper>
    );
}
export default ToDoList;
