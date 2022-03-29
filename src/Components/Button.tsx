import React from "react";

export const Button = (props: any) => {
    const { id, text, handleClick, color } = props

    return (
        <button id={id} onClick={handleClick} style={{backgroundColor:`#${color}`}}>{text}</button>
    )
}