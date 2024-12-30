import React from "react"
import classNames from "classnames";

import { components } from "@modules";

export const SocialSectionWhite = ({ heading, text, img, href = "#", link }) => {
    const { Section } = components;
    return (
        <Section isHasText={true} isHasLink={true} text={text} textType="white" link={link} linkType="black" isHasHeading={true} heading={heading} href={href} tagName="section" className={classNames("social-section-white")}>
            <img className="social-section-white__img" src={img} alt="" />
        </Section>
    )
}
