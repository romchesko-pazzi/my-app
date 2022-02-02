import s from "../Todolist.module.css";
import React, {ChangeEvent, KeyboardEvent,} from "react";

type InputType = {
    valueOfInput: string;
    setValueOfInput: (v: string) => void;
    error: boolean
    setError: (v: boolean) => void;
}


export const Input = (props: InputType) => {

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        // if (event.key === "Enter") {
        //     onClickAddHandler();
        // }
    }
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setError(false);
        props.setValueOfInput(event.currentTarget.value);
    }

    return (
        <div>
            <input
                className={props.error ? s.error : ""}
                onKeyPress={onKeyPressHandler}
                onChange={onChangeHandler}
                value={props.valueOfInput}/>
            {props.error && <div className={s.errorMessage}>Title is required!</div>}
        </div>
    )
}