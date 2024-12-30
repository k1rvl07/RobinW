import React from "react"
import classNames from "classnames"

export const Button = ({ children, type = "default", className }) => {
    const buttonClass = classNames({
        'button': type === 'default',
        'button-small': type === 'small',
    }, className)
    return (
        <button className={buttonClass}>{children}</button>
    )
}

