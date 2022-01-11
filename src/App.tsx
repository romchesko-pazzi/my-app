import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

export type filterType = "All" | "Active" | "Completed"

function App() {
    const [tasks, setTask] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false}
    ])
    const removeTasks = (rem: number) => {
        setTask(tasks.filter(f => f.id !== rem))
    }








    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={filteredT}
                      removeTasks={removeTasks}
                      filterTasks={filterTasks}/>

        </div>
    );
}

export default App;
