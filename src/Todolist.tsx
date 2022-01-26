import React, {ChangeEvent, useState, KeyboardEvent,} from 'react';
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
    changeStatus: (id: string, value: boolean) => void;
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

    const deleteHandler = (id: string) => props.deleteTask(id);
    const filterHandler = (title: FilterType) => props.filterTask(title);
    const checkedHandler = (id: string, event: boolean) => {
        props.changeStatus(id, event);
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
                    <li key={m.id}>
                        <input type="checkbox"
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
            <button onClick={() => filterHandler("all")}>all</button>
            <button onClick={() => filterHandler("active")}>active</button>
            <button onClick={() => filterHandler("completed")}>completed</button>
        </div>
    </div>
}