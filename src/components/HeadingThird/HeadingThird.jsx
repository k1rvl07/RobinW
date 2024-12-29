import React from "react"
import classNames from "classnames"

export const HeadingThird = ({ children, className }) => {
    return (
        <h3 className={classNames("heading-third", className)}>{children}</h3> 
    )
}
