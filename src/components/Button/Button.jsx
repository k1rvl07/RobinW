import React from "react";
import classNames from "classnames";

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
