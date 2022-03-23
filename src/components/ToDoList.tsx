import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import styled from 'styled-components';
import { BsTrash, FiEdit } from 'react-icons/all';
import { IToDo } from '../modules/todo/types';
import { deleteTodo } from '../modules/todo/actions';
import React from 'react';

const ToDoWrapper = styled.div`
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
    let todoList = useSelector((state: RootState) => state.todo.todo);
    const dispatch = useDispatch();
    const onRemove = (item: IToDo) => {
        dispatch(deleteTodo(item));
    };

    return (
        <>
            {todoList.map(item => (
                <ToDoWrapper key={item.id}>
                    {item.todo}
                    <ButtonWrapper>
                        <FiEdit onClick={() => onRemove(item)} />
                        <BsTrash onClick={() => onRemove(item)} />
                    </ButtonWrapper>
                </ToDoWrapper>
            ))}
        </>
    );
}
export default ToDoList;
