import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import {CheckBox} from "./components/CheckBox";
import styles from "./Todolist.module.css";

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
    checkboxChangeStatus: (id: string, checked: boolean) => void;
    filter: FilterValuesType;
}

export function Todolist(props: PropsType) {

    let [title, setTitle] = useState("")
    let [error, setError] = useState(false);

    const addTask = () => {
        if (title === "") {
            return
        }
        props.addTask(title.trim());
        setTitle("");
        setError(true);
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(true);
        if (e.key === "Enter") {
            addTask();
        }
    }

    const onAllClickHandler = () => props.changeFilter("all");
    const onActiveClickHandler = () => props.changeFilter("active");
    const onCompletedClickHandler = () => props.changeFilter("completed");

    // const callbackCheckbox = (id: string, value: boolean) => {
    //     props.checkboxChangeStatus(id, value);
    // }

    const onChangeHandlerChecked = (id: string, value: boolean) => {
        props.checkboxChangeStatus(id, value)
    }


    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
            />
            <button onClick={addTask}>+</button>
            {error && <div className={styles.errorMessage}>Title is required</div>}
        </div>
        <ul>
            {
                props.tasks.map(t => {

                    const onClickHandler = () => props.removeTask(t.id)
                    // const callbackCheckbox = (value: boolean) => {
                    //     props.checkboxChangeStatus(t.id, value);
                    // }
                    return <li key={t.id} className={t.isDone ? styles.isDoneStyle : ""}>
                        {/*<CheckBox isDone={t.isDone} callbackCheckbox={() => callbackCheckbox(t.id, t.isDone)}/>*/}
                        <input type="checkbox" checked={t.isDone}
                               onChange={(event) => onChangeHandlerChecked(t.id, event.currentTarget.checked)}/>
                        <span>{t.title}</span>
                        <button onClick={onClickHandler}>x</button>
                    </li>
                })
            }
        </ul>
        <div>
            <button className={props.filter === "all" ? styles.activeFilter : ""} onClick={onAllClickHandler}>All
            </button>
            <button className={props.filter === "active" ? styles.activeFilter : ""}
                    onClick={onActiveClickHandler}>Active
            </button>
            <button className={props.filter === "completed" ? styles.activeFilter : ""}
                    onClick={onCompletedClickHandler}>Completed
            </button>
        </div>
    </div>
}
