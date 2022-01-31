import React, {useState} from 'react';
import {v1} from 'uuid';
import './App.css';

import {TaskType, Todolist} from './Todolist';

export type FilterType = "all" | "active" | "completed";

export function App() {

    // хук со стартовым значением
    const [tasks, setTasks] = useState<TaskType[]>([
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

    //добавление
    const addTask = (newTitle: string) => {
        let newTask = {id: v1(), title: newTitle, isDone: false};
        setTasks([newTask, ...tasks]);
    }

    //Checkbox status
    const changeStatus = (id: string, value: boolean) => {
        setTasks(tasks.map(m => m.id === id ? {...m, isDone: value} : m));
    }

    return (
        <div className="App">
            <Todolist title={"TodoList"}
                      tasks={tasks}
                      deleteTask={deleteTask}
                      addTask={addTask}
                      changeStatus={changeStatus}
            />
        </div>
    );
}