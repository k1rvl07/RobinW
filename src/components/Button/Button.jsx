import classNames from "classnames";
import React from "react";

export const Button = ({ children, size = "default", onClick, type = "button", className }) => {
  const buttonClass = classNames(
    {
      button: size === "default",
      "button-small": size === "small",
    },
    className,
  );
  return (
    <button type={type} className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};
