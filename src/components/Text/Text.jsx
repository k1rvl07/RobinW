import classNames from "classnames";
import React from "react";

export const Text = ({ type, children, className, size = "normal" }) => {
  const textClass = classNames(
    {
      "text-black": type === "black" && size === "normal",
      "text-white": type === "white" && size === "normal",
      "text-black-small": type === "black" && size === "small",
      "text-white-small": type === "white" && size === "small",
    },
    className,
  );

  return <p className={textClass}>{children}</p>;
};
