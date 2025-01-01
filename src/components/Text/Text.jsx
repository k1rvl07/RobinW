import classNames from "classnames";
import React from "react";

export const Text = ({ color, children, className, size = "normal" }) => {
  const textClass = classNames(
    {
      "text-black": color === "black" && size === "normal",
      "text-white": color === "white" && size === "normal",
      "text-black-small": color === "black" && size === "small",
      "text-white-small": color === "white" && size === "small",
    },
    className,
  );

  return <p className={textClass}>{children}</p>;
};
