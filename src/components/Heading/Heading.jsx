import React from "react";
import classNames from "classnames";

export const Heading = ({
  level = 2,
  isHasSubHeading = false,
  subheading,
  headingType = "black",
  children,
  className,
}) => {
  const headingClass = classNames(
    {
      "heading-second-white": level === 2 && headingType === "white",
      "heading-second-black": level === 2 && headingType === "black",
      "heading-third": level === 3,
    },
    level === 2 ? `${className}__heading` : className
  );

  const content = (
    <>
      {isHasSubHeading && (
        <p className={classNames("subheading", `${className}__subheading`)}>{subheading}</p>
      )}
      {level === 2 && <h2 className={headingClass}>{children}</h2>}
      {level === 3 && <h3 className={headingClass}>{children}</h3>}
    </>
  );

  return isHasSubHeading ? (
    <div className={classNames("heading-container", `${className}__heading-container`)}>{content}</div>
  ) : (
    content
  );
};
