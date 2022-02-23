import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterType} from "./App";
import {Button} from "./components/Button/Button";
import s from "./Todolist.module.css";
import {AddForm} from "./components/AddForm/AddForm";
import {EditableSpan} from "./components/EditableSpan/EditableSpan";

export type TaskType = {
    id: string,
    title: string,
    isDone: boolean,
}

type PropsType = {
    todolistID: string,
    title: string,
    tasks: Array<TaskType>,
    deleteTask: (todolistID: string, taskID: string) => void,
    addTask: (todolistID: string, newTitle: string) => void,
    changeStatus: (todolistID: string, id: string, value: boolean) => void,
    updateTodolistTitle: (todolistID: string, newTitle: string) => void,
}

export const Todolist = (props: PropsType) => {

    const [filter, setFilter] = useState<FilterType>("all");
    // const [valueOfInput, setValueOfInput] = useState("");
    // const [error, setError] = useState(false);

    const filterTask = (taskTitle: FilterType) => {
        setFilter(taskTitle);
    }
    let filteredTasks = props.tasks;
    if (filter === "completed") {
        filteredTasks = props.tasks.filter(f => f.isDone);
    } else if (filter === "active") {
        filteredTasks = props.tasks.filter(f => !f.isDone);
    }

    // const onClickAddHandler = () => {
    //     if (valueOfInput.trim() !== "") {
    //         props.addTask(props.todolistID, valueOfInput.trim());
    //         setValueOfInput("");
    //     }
    //     if (valueOfInput === "") {
    //         setError(true);
    //     }
    // }
    // const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    //     if (event.key === "Enter") {
    //         onClickAddHandler()
    //     }
    // }
    // const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    //     setError(false);
    //     setValueOfInput(event.currentTarget.value);
    // }

    const addTaskHandler = (title: string) => {
        props.addTask(props.todolistID, title)
    }
    const deleteHandler = (id: string) => props.deleteTask(props.todolistID, id);
    const filterHandler = (title: FilterType) => filterTask(title);
    const checkedHandler = (todolistID: string, id: string, event: boolean) => {
        props.changeStatus(props.todolistID, id, event);
    }
    const updateTodolistTitleHandler = (newTitle: string) => {
        props.updateTodolistTitle(props.todolistID, newTitle);
    }

    return <div>
        <h3><EditableSpan name={props.title} callback={updateTodolistTitleHandler}/></h3>
        {/*<h3>{props.title}</h3>*/}
        <div>
            <AddForm callback={addTaskHandler}/>
            {/*<input value={valueOfInput}*/}
            {/*       onChange={onChangeHandler}*/}
            {/*       onKeyPress={onKeyPressHandler}*/}
            {/*       className={error ? s.error : ""}*/}
            {/*/>*/}
            {/*<Button name={"add"} callBack={onClickAddHandler}/>*/}
            {/*{error ? <div className={s.errorMessage}>Title is required</div> : ""}*/}
        </div>
        <ul>
            {filteredTasks.map(m => {
                return (
                    <li key={m.id} className={m.isDone ? s.isDone : ""}>
                        <input
                            type={"checkbox"}
                            checked={m.isDone}
                            onChange={(e) => checkedHandler(props.todolistID, m.id, e.currentTarget.checked)}
                        />
                        {/*<EditableSpan name={m.title}/>*/}
                        <span>{m.title}</span>
                        <Button name={"delete"} callBack={() => deleteHandler(m.id)}/>
                    </li>
                )
            })}
        </ul>
        <div>
            <Button filter={filter === "all" ? filter : ""} name={"all"}
                    callBack={() => filterHandler("all")}/>
            <Button filter={filter === "active" ? filter : ""} name={"active"}
                    callBack={() => filterHandler("active")}/>
            <Button filter={filter === "completed" ? filter : ""} name={"completed"}
                    callBack={() => filterHandler("completed")}/>
        </div>
    </div>
}