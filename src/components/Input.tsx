import s from "../Todolist.module.css";
import React, {ChangeEvent, KeyboardEvent} from "react";

export const Input = () => {

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setError(false);
        setValueOfInput(event.currentTarget.value);
    }

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            onClickAddHandler();
        }
    }

    return (
        <div>
            <input
                className={error ? s.error : ""}
                onKeyPress={onKeyPressHandler}
                onChange={onChangeHandler}
                value={valueOfInput}/>
        </div>
    )
}