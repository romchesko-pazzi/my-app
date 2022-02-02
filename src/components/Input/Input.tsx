import s from "./Input.module.css";
import React, {ChangeEvent, KeyboardEvent,} from "react";

type InputType = {
    valueOfInput: string;
    setValueOfInput: (v: string) => void;
    error: boolean;
    setError: (valueErr: boolean) => void;
    enter: () => void;
}

export const Input = ({valueOfInput, setValueOfInput, error, setError, enter,}: InputType) => {

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            enter()
        }
    }
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setError(false);
        setValueOfInput(event.currentTarget.value);
    }

    return (
        <div>
            <input
                className={error ? s.error : ""}
                onKeyPress={onKeyPressHandler}
                onChange={onChangeHandler}
                value={valueOfInput}/>
            {error && <div className={s.errorMessage}>Title is required!</div>}
        </div>
    )
}