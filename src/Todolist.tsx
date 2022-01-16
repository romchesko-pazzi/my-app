import React from 'react';
import {filterType} from "./App";

type TodolistPropsType = {
    title?: string
    arr: Array<inArray>
    deleteTasks: (taskId: number) => void
    filterTasks: (taskStatus: filterType) => void
}

type inArray = {
    id: number
    title: string
    isDone: boolean
}

export function Todolist(props: TodolistPropsType) {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.arr.map((m, i) =>
                    <li key={i}>
                        <button onClick={() => props.deleteTasks(m.id)}>delete</button>
                        <input type={"checkbox"} checked={m.isDone}/><span>{m.title}</span></li>
                )}
            </ul>
            <div>
                <button onClick={() => props.filterTasks("All")}>All</button>
                <button onClick={() => props.filterTasks("Active")}>Active</button>
                <button onClick={() => props.filterTasks("Completed")}>Completed</button>
            </div>
        </div>
    )
}