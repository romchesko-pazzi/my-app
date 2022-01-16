import React from 'react';

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


export function Todolist(props: TodolistPropsType) {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.arr.map(m =>
                    <li>
                        <button onClick={() => props.deleteTasks(m.id)}>delete</button>
                        <input type={"checkbox"} checked={m.isDone}/><span>{m.title}</span></li>
                )}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}