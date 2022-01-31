import React, {ChangeEvent, useState, KeyboardEvent,} from 'react';
import {FilterType} from "./App";
import s from "./Todolist.module.css";

export type TaskType = {
    id: string;
    title: string;
    isDone: boolean;
}

type PropsType = {
    title: string;
    tasks: Array<TaskType>;
    deleteTask: (taskID: string) => void;
    // filterTask: (taskTitle: FilterType) => void;
    addTask: (newTitle: string) => void;
    changeStatus: (id: string, value: boolean) => void;
    // filter: FilterType;
}

export function Todolist(props: PropsType) {

    const [filter, setFilter] = useState<FilterType>("all");

    const filterTask = (taskTitle: FilterType) => {
        setFilter(taskTitle);
    }

    let filteredTasks = props.tasks;

    if (filter === "completed") {
        filteredTasks = props.tasks.filter(f => f.isDone);
    } else if (filter === "active") {
        filteredTasks = props.tasks.filter(f => !f.isDone);
    }


    const [valueOfInput, setValueOfInput] = useState("");
    // хук для ошибки
    const [error, setError] = useState(false);

    //инпут
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setError(false);
        setValueOfInput(event.currentTarget.value);
    }

    const onClickAddHandler = () => {
        if (valueOfInput.trim() !== "") {
            props.addTask(valueOfInput.trim());
            setValueOfInput("");
        }
        if (valueOfInput === "") {
            setError(true);
        }
    }

    // Enter
    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            onClickAddHandler();
        }
    }

    const deleteHandler = (id: string) => props.deleteTask(id);
    const filterHandler = (title: FilterType) => filterTask(title);
    const checkedHandler = (id: string, event: boolean) => {
        props.changeStatus(id, event);
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input
                className={error ? s.error : ""}
                onKeyPress={onKeyPressHandler}
                onChange={onChangeHandler}
                value={valueOfInput}/>
            <button onClick={onClickAddHandler}>add</button>
            {error && <div className={s.errorMessage}>Title is required!</div>}
        </div>
        <ul>
            {filteredTasks.map(m => {
                return (
                    <li key={m.id}>
                        <input
                            type="checkbox"
                            checked={m.isDone}
                            onChange={(e) => checkedHandler(m.id, e.currentTarget.checked)}
                        />
                        <span>{m.title}</span>
                        <button onClick={() => deleteHandler(m.id)}>delete</button>
                    </li>
                )
            })}
        </ul>
        <div>
            <button className={filter === "all" ? s.activeFilter : ""} onClick={() => filterHandler("all")}>all</button>
            <button className={filter === "active" ? s.activeFilter : ""}
                    onClick={() => filterHandler("active")}>active
            </button>
            <button className={filter === "completed" ? s.activeFilter : ""}
                    onClick={() => filterHandler("completed")}>completed
            </button>
        </div>
    </div>
}