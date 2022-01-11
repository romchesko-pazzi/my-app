import React from 'react';

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTasks: (param: number) => void
    filterTasks: (filt: string) => void
}

export function Todolist(props: PropsType) {
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {props.tasks.map((m, index) => {
                return (
                    <li key={index}>
                        <button onClick={() => props.removeTasks(m.id)}>X</button>
                        <input type="checkbox" checked={m.isDone}/>
                        <span>{m.title}</span></li>
                )
            })}
        </ul>
        <div>
            <button onClick={()=>props.filterTasks("All")}>All</button>
            <button onClick={()=>props.filterTasks("Active")} >Active</button>
            <button onClick={()=>props.filterTasks("Completed")}>Completed</button>
        </div>
    </div>
}
