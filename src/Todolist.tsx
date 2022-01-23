import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterValuesType} from './App';

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (newTask: string) => void;
}

export function Todolist(props: PropsType) {

    const [title, setTitle] = useState("")

    const onClickHandler = () => {
        if (title === "") {
            return;
        }
        props.addTask(title);
        setTitle("");
    }

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            onClickHandler()
        }
    }

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value);
    }

    const onChangeFilterHandler = (value: FilterValuesType) => {
        props.changeFilter(value);
    }

    const removeHandler = (value: string) => {
        props.removeTask(value)
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input onKeyPress={onKeyPressHandler} onChange={onChangeHandler} value={title}/>
            <button onClick={onClickHandler}>+</button>
        </div>
        <ul>
            {
                props.tasks.map(t => <li key={t.id}>
                    <input type="checkbox" checked={t.isDone}/>
                    <span>{t.title}</span>
                    <button onClick={() => removeHandler(t.id)}>x</button>
                </li>)
            }
        </ul>
        <div>
            <button onClick={() => {
                onChangeFilterHandler("all")
            }}>All
            </button>
            <button onClick={() => {
                onChangeFilterHandler("active")
            }}>Active
            </button>
            <button onClick={() => {
                onChangeFilterHandler("completed")
            }}>Completed
            </button>
        </div>
    </div>
}
