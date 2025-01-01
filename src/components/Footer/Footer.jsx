import { assets, components, data } from "@exports";
import React from "react";

export const Footer = () => {
  const { Section, Text, Nav, Link } = components;
  const { FOOTER_SOCIAL_MEDIA, FOOTER_LINKS } = data;
  return (
    <Section tagName="footer" className="footer">
      <div className="footer__content">
        <img className="footer__logo" src={assets.logo} alt="" />
        <div className="footer__social-media">
          {FOOTER_SOCIAL_MEDIA.map((socialMedia) => (
            <Link key={socialMedia.id} link={socialMedia} className="footer__social-media-link">
              <img src={assets[socialMedia.icon]} className="footer__link-img" alt="" />
            </Link>
          ))}
        </div>
      </div>
      <Nav type="footer" className="footer__nav" data={FOOTER_LINKS} />
      <Text size="small" color="white" className="footer__copyright">
        Not Copyright 2025 • Robin Williams. Webflow cloneable
      </Text>
    </Section>
  );
};
