import React from 'react';
import {FilterType} from "./App";

type TaskType = {
    id: string;
    title: string;
    isDone: boolean;
}

type PropsType = {
    title: string;
    tasks: Array<TaskType>;
    deleteTask: (taskID: string) => void;
    filterTask: (taskTitle: FilterType) => void;
}

export function Todolist(props: PropsType) {
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {props.tasks.map(m => {
                return (
                    <li key={m.id}><input type="checkbox" checked={m.isDone}/><span>{m.title}</span>
                        <button onClick={(e) => props.deleteTask(m.id)}>delete</button>
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