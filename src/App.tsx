import React, {useState} from 'react';
import {v1} from 'uuid';
import './App.css';
import {Todolist} from './Todolist';

export function App() {

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

    return (
        <div className="App">
            <Todolist title={"TodoList"}
                      tasks={tasks}
                      deleteTask={deleteTask}
            />
        </div>
    );
}