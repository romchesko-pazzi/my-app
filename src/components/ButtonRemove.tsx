import React from 'react';

type propsType = {
    name: string;
    callback: () => void;
}
export const ButtonRemove = (props: propsType) => {

    const onClickRemoveHandler = () => {
        props.callback();
    }

    return (
        <>
            <button onClick={onClickRemoveHandler}>{props.name}</button>
        </>
    )
};



