import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';


function App() {

    // let tasks = [
    //     {id: 1, title: "HTML&CSS", isDone: true},
    //     {id: 2, title: "JS", isDone: false},
    //     {id: 3, title: "React", isDone: true}
    // ]

    let [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: false},
        {id: 3, title: "React", isDone: true}
    ])

    const deleteTasks = (taskId: number) => {
        setTasks(tasks.filter(f=>f.id !== taskId))
    }


    return (
        <div className={"App"}>
            <Todolist title={"1"} arr={tasks} deleteTasks={deleteTasks}/>
        </div>
    )
}

export default App;
