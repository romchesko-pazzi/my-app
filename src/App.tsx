import React from 'react';
import './App.css';
import {Todolist} from './Todolist';


function App() {

    let arr1 = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: false},
        {id: 3, title: "React", isDone: true}
    ]

    let arr2 = [
        {id: 1, title: "HTML&CSS2", isDone: false},
        {id: 2, title: "JS2", isDone: true},
        {id: 3, title: "React2", isDone: false}
    ]

    return (
        <div className={"App"}>
            <Todolist title={"1"} arr={arr1}/>
            <Todolist title={"2"} arr={arr2}/>
        </div>
    )
}

export default App;
