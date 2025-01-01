import classNames from "classnames";
import React from "react";

import { components } from "@exports";

export const SectionSocialWhite = ({ id, heading, text, img, href = "#", link, className }) => {
  const { Section } = components;
  return (
    <Section
      id={id}
      isHasText={true}
      isHasLink={true}
      text={text}
      textColor="black"
      link={link}
      linkColor="black"
      isHasHeading={true}
      heading={heading}
      href={href}
      tagName="section"
      className={classNames(className, "section-social-white")}
    >
      <img className="section-social-white__img" src={img} alt="" />
    </Section>
  );
};
