import React from "react";

export const HeaderNav = ({ elem }) => {
    return (
        <a className="header__link" href={elem.href}>{elem.text}</a>
    );
};