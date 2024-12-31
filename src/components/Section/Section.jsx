import React from "react";
import { components } from '@modules';

export const Section = ({
  tagName: Tag = "section",
  className,
  children,
  isHasContainer = true,
  isHasHeading = false,
  heading,
  headingType = "black",
  isHasSubHeading = false,
  subheading,
  isHasText = false,
  text,
  textType,
  isHasLink = false,
  link,
  linkType,
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
              headingType={headingType}
              className={className}
            >
              {heading}
            </Heading>
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
            <Heading
              level={2}
              isHasSubHeading={isHasSubHeading}
              subheading={subheading}
              headingType={headingType}
              className={className}
            >
              {heading}
            </Heading>
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