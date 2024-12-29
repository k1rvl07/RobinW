import React from "react"
import classNames from "classnames"

export const Text = ({ type, children, className }) => {
    const textClass = classNames({
        'text-black': type === 'black',
        'text-white': type === 'white',
    }, className);
    return (
        <p className={textClass}>{children}</p>
    )
}
