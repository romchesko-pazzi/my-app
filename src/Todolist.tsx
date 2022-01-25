import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterType} from "./App";

export type TaskType = {
    id: string;
    title: string;
    isDone: boolean;
}

type PropsType = {
    title: string;
    tasks: Array<TaskType>;
    deleteTask: (taskID: string) => void;
    filterTask: (taskTitle: FilterType) => void;
    addTask: (newTitle: string) => void;
}

export function Todolist(props: PropsType) {

    const [valueOfInput, setValueOfInput] = useState("");

    //инпут
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValueOfInput(event.currentTarget.value);
    }

    const onClickAddHandler = () => {
        if (valueOfInput === "") {
            return;
        }
        props.addTask(valueOfInput);
        setValueOfInput("");
    }
    // Enter
    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            onClickAddHandler();
        }
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input onKeyPress={onKeyPressHandler} onChange={onChangeHandler} value={valueOfInput}/>
            <button onClick={onClickAddHandler}>add</button>
        </div>
        <ul>
            {props.tasks.map(m => {
                return (
                    <li key={m.id}><input type="checkbox" checked={m.isDone}/><span>{m.title}</span>
                        <button onClick={() => props.deleteTask(m.id)}>delete</button>
                    </li>
                )
            })}
        </ul>
        <div>
            <button onClick={() => props.filterTask("all")}>all</button>
            <button onClick={() => props.filterTask("active")}>active</button>
            <button onClick={() => props.filterTask("completed")}>completed</button>
        </div>
    </div>
}