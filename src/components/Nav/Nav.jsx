import { components } from "@exports";
import React from "react";

export const Nav = ({ type = "header", className, data: DATA }) => {
  const { Link } = components;
  return (
    <nav className={className}>
      <ul className={`${type}__list`}>
        {DATA.map((elem) => (
          <li key={elem.id} className={`${type}__item`}>
            <Link
              isHeaderLink={type === "header"}
              isFooterLink={type === "footer"}
              link={elem}
              href={elem.href}
            >
              {elem.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
