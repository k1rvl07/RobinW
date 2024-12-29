import React from "react"
import classNames from "classnames"

export const HeadingThird = ({ children, className }) => {
    const headingClass = classNames({
        'heading-third': true
    }, className);
    return (
        <h3 className={headingClass}>{children}</h3> 
    )
}
