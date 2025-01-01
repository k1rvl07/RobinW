import { components } from "@exports";
import React from "react";

export const Section = ({
  tagName: Tag = "section",
  className,
  id = className,
  children,
  isHasContainer = true,
  isHasHeading = false,
  heading,
  headingColor = "black",
  isHasSubHeading = false,
  subheading,
  isHasText = false,
  text,
  textColor,
  isHasLink = false,
  link,
  linkColor,
  href = "#",
}) => {
  const { Container, Heading, Text, Link } = components;

  const shouldWrapContent = isHasHeading && (isHasText || isHasLink);

  const content = (
    <>
      {shouldWrapContent ? (
        <div className={`${className}__main-content`}>
          {isHasHeading && (
            <Heading
              level={2}
              isHasSubHeading={isHasSubHeading}
              subheading={subheading}
              headingColor={headingColor}
              className={className}
            >
              {heading}
            </Heading>
          )}

          {isHasText && (
            <Text color={textColor} className={`${className}__text`}>
              {text}
            </Text>
          )}

          {isHasLink && (
            <Link href={href} color={linkColor} className={`${className}__link`}>
              {link}
            </Link>
          )}
        </div>
      ) : (
        <>
          {isHasHeading && (
            <Heading
              level={2}
              isHasSubHeading={isHasSubHeading}
              subheading={subheading}
              headingColor={headingColor}
              className={className}
            >
              {heading}
            </Heading>
          )}

          {isHasText && (
            <Text color={textColor} className={`${className}__text`}>
              {text}
            </Text>
          )}

          {isHasLink && (
            <Link href={href} color={linkColor} className={`${className}__link`}>
              {link}
            </Link>
          )}
        </>
      )}

      {children}
    </>
  );

  return (
    <Tag id={id} className={className}>
      {isHasContainer ? (
        <Container>
          <div className={`${className}__container`}>{content}</div>
        </Container>
      ) : (
        content
      )}
    </Tag>
  );
};
