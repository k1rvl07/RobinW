import React from "react";
import classNames from "classnames";

export const Link = ({ className, href, type, children, isHeaderLink = false }) => {
    const linkClass = classNames(
        {
            'link-black': type === 'black',
            'link-white': type === 'white',
            'header__link': isHeaderLink, 
            'link-nav': isHeaderLink,     
        },
        className 
    );

    return (
        <a className={linkClass} href={href}>
            {children}
        </a>
    );
};