import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addTodo} from "../modules/todo/actions";

function ToDo () {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const updateTodo = React.useCallback(
        (todo: string) => dispatch(addTodo({id: new Date().getTime(), todo: todo})), [dispatch]
    );
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(value  === '') return;
        updateTodo(value);
        setValue('');
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <input placeholder="ToDo input" value={value} onChange={onChange} />
                <button type="submit">등록</button>
            </form>

    </>
    )
}

export default ToDo;
