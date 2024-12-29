import React from "react"
import components from "@components"
import classNames from "classnames";
import { Link } from "@components/Link";

export const SocialSectionWhite = ({ heading, text, img, href, link }) => {
    const { Section, Text, HeadingSecond } = components;
    return (
        <Section tagName="section" className={classNames("social-section-white")}>
            <div className="social-section-white__content">
                <HeadingSecond type="black">{heading}</HeadingSecond>
                <Text type="white" className="social-section-white__text">{text}</Text>
                <Link className="social-section-white__link" href={href} type="black">{link}</Link>
            </div>
            <img className="social-section-white__img" src={img} alt="" />
        </Section>
    )
}
