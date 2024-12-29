import React from "react"
import components from "@components"
import classNames from "classnames";
import { Link } from "@components/Link";

export const SocialSectionWhite = ({ heading, text, img, href = "#", link }) => {
    const { Section } = components;
    return (
        <Section isHasText={true} isHasLink={true} text={text} textType="white" link={link} linkType="black" isHasHeading={true} heading={heading} href={href} tagName="section" className={classNames("social-section-white")}>
            <img className="social-section-white__img" src={img} alt="" />
        </Section>
    )
}
