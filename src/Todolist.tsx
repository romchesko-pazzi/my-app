import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (newTitle: string) => void;
}

export function Todolist(props: PropsType) {
    const [newTitle, setNewTitle] = useState("")

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(event.currentTarget.value);
    }

    const onClickHandler = () => {
        props.addTask(newTitle);
        setNewTitle(" ");
    }

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            onClickHandler()
        }
    }

    const onClickFilterHandler = (value: FilterValuesType) => {
        props.changeFilter(value);
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={newTitle} onChange={onChangeHandler} onKeyPress={onKeyPressHandler}/>
            <button onClick={onClickHandler}>+</button>
        </div>
        <ul>
            {
                props.tasks.map(t => <li key={t.id}>
                    <input type="checkbox" checked={t.isDone}/>
                    <span>{t.title}</span>
                    <button onClick={() => {
                        props.removeTask(t.id)
                    }}>delete
                    </button>
                </li>)
            }
        </ul>
        <div>
            <button onClick={() => onClickFilterHandler("all")}>All</button>
            <button onClick={() => onClickFilterHandler("active")}>Active</button>
            <button onClick={() => onClickFilterHandler("completed")}>Completed</button>
        </div>
    </div>
}
