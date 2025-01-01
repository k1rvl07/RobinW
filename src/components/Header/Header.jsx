import { assets, components, data, hooks } from "@exports";
import { useState } from "react";

export const Header = () => {
  const { Section, Nav } = components;
  const { HEADER_LINKS } = data;
  const { useScreenSize } = hooks;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { width } = useScreenSize();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navClassName = `header__nav ${isMenuOpen || width > 768 ? "header__nav--open" : ""}`;

  return (
    <Section tagName="header" className="header">
      <img className="header__logo" src={assets.logo} alt="Vector illustration" />
      <button type="button" className="header__button" onClick={toggleMenu}>
        <img
          className="header__button-img"
          src={isMenuOpen ? assets.cross : assets.burger}
          alt=""
        />
      </button>
      <Nav type="header" className={navClassName} data={HEADER_LINKS} />
    </Section>
  );
};
