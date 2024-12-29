import React from "react"
import classNames from "classnames"

export const Link = ({ className, href, type, children }) => {
    const linkClass = classNames({
        'link-black': type === 'black',
        'link-white': type === 'white',
    }, className);
    return (
        <a className={classNames(linkClass)} href={href}>{children}</a>
    )
}
