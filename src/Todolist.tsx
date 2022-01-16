import React from 'react';
import {useState} from "react";

type TodolistPropsType = {
    title?: string
    arr: Array<inArray>
    deleteTasks: (taskId: number) => void
}

type inArray = {
    id: number
    title: string
    isDone: boolean
}

type filterType = "All" | "Completed" | "Active";

export function Todolist(props: TodolistPropsType) {
    let [filter, setFilter] = useState('All')

    let filteredT = props.arr
    if (filter === 'Active') {
        filteredT = props.arr.filter(f => f.isDone)
    }
    if (filter === "Completed") {
        filteredT = props.arr.filter(f => !f.isDone)
    }

    const filteredTasks = (filterValue: filterType) => {
        setFilter(filterValue)
    }
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {filteredT.map((m, i) =>
                    <li key={i}>
                        <button onClick={() => props.deleteTasks(m.id)}>delete</button>
                        <input type={"checkbox"} checked={m.isDone}/><span>{m.title}</span></li>
                )}
            </ul>
            <div>
                <button onClick={() => filteredTasks("All")}>All</button>
                <button onClick={() => filteredTasks("Active")}>Active</button>
                <button onClick={() => filteredTasks("Completed")}>Completed</button>
            </div>
        </div>
    )
}