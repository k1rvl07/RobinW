import React from "react";

export const HeaderLink = ({ headerLink }) => {
    return (
        <a className="header__link" href={headerLink.href}>{headerLink.text}</a>
    );
};