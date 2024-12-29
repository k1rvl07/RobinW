import React from "react";
import classNames from "classnames";

export const HeadingSecond = ({
  isHasSubHeading = false,
  subheading,
  headingType = "black",
  children,
}) => {

  const headingClass = classNames({
    "heading-second-white": headingType === "white",
    "heading-second-black": headingType === "black",
  });

  return (
    <div className="heading-container">
      {isHasSubHeading && (
        <p className="heading-container__subheading">{subheading}</p>
      )}

      <h2 className={headingClass}>{children}</h2>
    </div>
  );
};