import React from "react"
import classNames from "classnames"

export const TextSmall = ({ type, children, className }) => {
    const textClass = classNames({
        'text-black-small': type === 'black',
        'text-white-small': type === 'white',
    }, className);
    return (
        <p className={textClass}>{children}</p>
    )
}