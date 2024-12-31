import { useState } from "react";
import { components, svgImages, data, hooks } from "@modules";

export const Header = () => {
  const { Section, Link } = components;
  const { HEADER_LINKS } = data;
  const { useScreenSize } = hooks;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { width } = useScreenSize();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navClassName = `header__nav ${
    isMenuOpen || width > 768 ? "header__nav--open" : ""
  }`;

  return (
    <Section tagName="header" className="header">
      <img
        className="header__logo"
        src={svgImages["logo"]}
        alt="Vector illustration"
      />
      <button type="button" className="header__button" onClick={toggleMenu}>
        <img
          className="header__button-img"
          src={isMenuOpen ? svgImages["cross"] : svgImages["burger"]}
          alt=""
        />
      </button>
      <nav className={navClassName}>
        <ul className="header__list">
          {HEADER_LINKS.map((headerLink) => (
            <li key={headerLink.id} className="header__item">
              <Link isHeaderLink={true} link={headerLink}>
                {headerLink.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Section>
  );
};