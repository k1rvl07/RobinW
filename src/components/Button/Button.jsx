import classNames from "classnames";
import React from "react";

export const Button = ({ children, type = "default", onClick, className }) => {
  const buttonClass = classNames(
    {
      button: type === "default",
      "button-small": type === "small",
    },
    className,
  );
  return (
    <button type="button" className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};
