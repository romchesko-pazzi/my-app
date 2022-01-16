import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

export type filterType = "All" | "Active" | "Completed"

function App() {

    let [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: false},
        {id: 3, title: "React", isDone: true}
    ])

    const deleteTasks = (taskId: number) => {
        setTasks(tasks.filter(f => f.id !== taskId))
    }

    let [filter, setFilter] = useState("All")

    let filteredTasks = tasks

    if (filter === "Active") {
        filteredTasks = tasks.filter(f => !f.isDone)
    }
    if (filter === "Completed") {
        filteredTasks = tasks.filter(f => f.isDone)
    }

    const filterTasks = (taskStatus: filterType) => {
        setFilter(taskStatus)
    }

    return (
        <div className={"App"}>
            <Todolist
                title={"1"}
                arr={filteredTasks}
                deleteTasks={deleteTasks}
                filterTasks={filterTasks}
            />
        </div>
    )
}

export default App;
