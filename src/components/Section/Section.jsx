import React from "react"

import components from '@components';

export const Section = ({ tagName, className, children }) => {
    const { Container } = components;
    const Tag = tagName;

    return (
        <Tag className={className}>
            <Container>
                <div className={`${className}__container`}>
                    {children}
                </div>
            </Container>
        </Tag>
    );
};