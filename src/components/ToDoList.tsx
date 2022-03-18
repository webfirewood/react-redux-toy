import {useSelector} from "react-redux";
import {RootState} from "../modules";

function ToDoList() {
    const todoList = useSelector((state:RootState) => state.todo.todo);
    return (<>
        {todoList.map(item => <div key={item.id}>{item.todo}</div>)}
        </>)
}
export default ToDoList;
