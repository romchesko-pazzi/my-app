import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import {ButtonRemove} from "./components/ButtonRemove";
import {ButtonFilter} from "./components/ButtonFilter";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
}

export function Todolist(props: PropsType) {

    let [title, setTitle] = useState("")

    const addTask = () => {
        if (title === "") {
            return
        }
        props.addTask(title);
        setTitle("");
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            addTask();
        }
    }

    const onFilterHandler = (value: FilterValuesType) => {
        props.changeFilter(value);
    }

    const removeHandler = (value: string) => {
        props.removeTask(value);
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
            />
            <button onClick={addTask}>+</button>
        </div>
        <ul>
            {
                props.tasks.map(t => {
                    return <li key={t.id}>
                        <input type="checkbox" checked={t.isDone}/>
                        <span>{t.title}</span>
                        <ButtonRemove name={"x"} callback={() => removeHandler(t.id)}/>
                    </li>
                })
            }
        </ul>
        <div>
            <ButtonFilter name={"all"} callback={() => onFilterHandler("all")}/>
            <ButtonFilter name={"active"} callback={() => onFilterHandler("active")}/>
            <ButtonFilter name={"completed"} callback={() => onFilterHandler("completed")}/>
        </div>
    </div>
}
