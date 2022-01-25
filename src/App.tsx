import React, {useState} from 'react';
import {v1} from 'uuid';
import './App.css';

import {Todolist} from './Todolist';

export function App() {

    // хук со стартовым значением
    const [tasks, setTasks] = useState([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "Rest Api", isDone: false},
        {id: v1(), title: "GraphQL", isDone: false},
    ]);


    //удаление
    const deleteTask = (taskID: string) => {
        setTasks(tasks.filter(f => f.id !== taskID));
    }

    //фильтрация по приоритету
    const [filter, setFilter] = useState("all")

    const filterTask = (taskTitle: string) => {
        setFilter(taskTitle);
    }

    let filteredTasks = tasks;

    filter === "completed" ? filteredTasks = tasks.filter(f => f.isDone) : filteredTasks = tasks.filter(f => !f.isDone)

    // if (filter === "completed") {
    //     filteredTasks = tasks.filter(f => f.isDone)
    // } else if (filter === "active") {
    //     filteredTasks = tasks.filter(f => !f.isDone)
    // }


    return (
        <div className="App">
            <Todolist title={"TodoList"}
                      tasks={filteredTasks}
                      deleteTask={deleteTask}
                      filterTask={filterTask}
            />
        </div>
    );
}