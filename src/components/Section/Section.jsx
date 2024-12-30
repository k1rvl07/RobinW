import React from "react";
import { components } from '@modules';

export const Section = ({
  tagName: Tag = "section",
  className,
  children,
  isHasContainer = true,
  isHasHeading = false,
  heading,
  isHasSubHeading = false,
  subheading,
  headingType = "black",
  isHasText = false,
  text,
  isHasLink = false,
  link,
  href = "#",
  textType,
  linkType,
}) => {
  const { Container, HeadingSecond, Text, Link } = components;

  const shouldWrapContent = isHasHeading && (isHasText || isHasLink);

  const content = (
    <>
      {shouldWrapContent ? (
        <div className={`${className}__main-content`}>
          {isHasHeading && (
            <HeadingSecond
              isHasSubHeading={isHasSubHeading}
              subheading={subheading}
              headingType={headingType}
            >
              {heading}
            </HeadingSecond>
          )}

          {isHasText && (
            <Text type={textType} className={`${className}__text`}>
              {text}
            </Text>
          )}

          {isHasLink && (
            <Link href={href} type={linkType} className={`${className}__link`}>
              {link}
            </Link>
          )}
        </div>
      ) : (
        <>
          {isHasHeading && (
            <HeadingSecond
              isHasSubHeading={isHasSubHeading}
              subheading={subheading}
              headingType={headingType}
            >
              {heading}
            </HeadingSecond>
          )}

          {isHasText && (
            <Text type={textType} className={`${className}__text`}>
              {text}
            </Text>
          )}

          {isHasLink && (
            <Link href={href} type={linkType} className={`${className}__link`}>
              {link}
            </Link>
          )}
        </>
      )}

      {children}
    </>
  );

  return (
    <Tag className={className}>
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