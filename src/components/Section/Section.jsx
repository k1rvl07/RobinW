import React from "react"

import components from '@components';

export const Section = ({ tagName, className, children, isHasHeading, heading, isHasSubHeading, subheading, headingType }) => {
    const { Container, HeadingSecond } = components;
    const Tag = tagName;
    if (isHasHeading) {
        return (
            <Tag className={className}>
                <Container>
                    <div className={`${className}__container`}>
                        <HeadingSecond isHasSubHeading={isHasSubHeading} subheading={subheading} type={headingType}>{heading}</HeadingSecond>
                        {children}
                    </div>
                </Container>
            </Tag>
        );
    }
    else {
        return (
            <Tag className={className}>
                <Container>
                    <div className={`${className}__container`}>
                        {children}
                    </div>
                </Container>
            </Tag>
        );
    }
};