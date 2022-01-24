import React, {ChangeEvent} from "react";

type CheckBoxType = {
    isDone: boolean
    callbackCheckbox: (value: boolean) => void
}

export const CheckBox = (props: CheckBoxType) => {

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.callbackCheckbox(event.currentTarget.checked)
    }

    return (
        <input type="checkbox" checked={props.isDone} onChange={onChangeHandler}/>
    )
}


