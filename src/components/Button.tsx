import React, {FC} from 'react';

interface IButton {
    nickName: string
    callback: () => void
}

export const Button: FC<IButton> = ({callback, nickName}) => {
    const onClickButtonHandler = () => {
        callback()
    }
    return (
        <button onClick={onClickButtonHandler}>{nickName}</button>
    );
};