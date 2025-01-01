import classNames from "classnames";
import React from "react";

export const Link = ({ className, href, color, children, isHeaderLink = false, isFooterLink }) => {
  const linkClass = classNames(
    {
      "link-black": color === "black",
      "link-white": color === "white",
      header__link: isHeaderLink,
      footer__link: isFooterLink,
      "link-nav": isHeaderLink || isFooterLink,
    },
    className,
  );

  return (
    <a className={linkClass} href={href}>
      {children}
    </a>
  );
};
