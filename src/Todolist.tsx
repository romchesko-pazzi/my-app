import React, {useState} from 'react';
import {FilterType} from "./App";
import {Button} from "./components/Button/Button";
import {Input} from "./components/Input/Input";
import s from "./Todolist.module.css";

export type TaskType = {
    id: string;
    title: string;
    isDone: boolean;
}

type PropsType = {
    title: string;
    tasks: Array<TaskType>;
    deleteTask: (taskID: string) => void;
    addTask: (newTitle: string) => void;
    changeStatus: (id: string, value: boolean) => void;
}

export function Todolist(props: PropsType) {

    const [filter, setFilter] = useState<FilterType>("all");
    const [valueOfInput, setValueOfInput] = useState("");
    const [error, setError] = useState(false);

    const filterTask = (taskTitle: FilterType) => {
        setFilter(taskTitle);
    }
    let filteredTasks = props.tasks;
    if (filter === "completed") {
        filteredTasks = props.tasks.filter(f => f.isDone);
    } else if (filter === "active") {
        filteredTasks = props.tasks.filter(f => !f.isDone);
    }

    const onClickAddHandler = () => {
        if (valueOfInput.trim() !== "") {
            props.addTask(valueOfInput.trim());
            setValueOfInput("");
        }
        if (valueOfInput === "") {
            setError(true);
        }
    }

    const deleteHandler = (id: string) => props.deleteTask(id);
    const filterHandler = (title: FilterType) => filterTask(title);
    const checkedHandler = (id: string, event: boolean) => {
        props.changeStatus(id, event);
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <Input valueOfInput={valueOfInput}
                   setValueOfInput={setValueOfInput}
                   error={error}
                   setError={setError}
                   enter={onClickAddHandler}
            />
            <Button name={"add"} callBack={onClickAddHandler}/>
        </div>
        <ul>
            {filteredTasks.map(m => {
                return (
                    <li key={m.id} className={m.isDone ? s.isDone : ""}>
                        <input
                            type={"checkbox"}
                            checked={m.isDone}
                            onChange={(e) => checkedHandler(m.id, e.currentTarget.checked)}
                        />
                        <span>{m.title}</span>
                        <Button name={"delete"} callBack={() => deleteHandler(m.id)}/>
                    </li>
                )
            })}
        </ul>
        <div>
            <Button filter={filter === "all" ? filter : ""} name={"all"}
                    callBack={() => filterHandler("all")}/>
            <Button filter={filter === "active" ? filter : ""} name={"active"}
                    callBack={() => filterHandler("active")}/>
            <Button filter={filter === "completed" ? filter : ""} name={"completed"}
                    callBack={() => filterHandler("completed")}/>
        </div>
    </div>
}