import React from "react";
import classNames from "classnames";

export const HeadingSecond = ({
  isHasSubHeading = false,
  subheading,
  headingType = "black",
  children,
  className,
}) => {

  const headingClass = classNames({
    "heading-second-white": headingType === "white",
    "heading-second-black": headingType === "black",
  }, `${className}__heading`);

  const content = (
    <>
      {isHasSubHeading && (
        <p className={classNames("subheading", `${className}__subheading`)}>{subheading}</p>
      )}

      <h2 className={headingClass}>{children}</h2>
    </>
  );

  return (
    (isHasSubHeading && (
      <div className={classNames("heading-container", `${className}__heading-container`)}>{content}</div>
    )) || content
  );
};