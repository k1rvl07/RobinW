import { useState } from "react";
import { components, svgImages, data, hooks } from "@modules";

export const Header = () => {
    const { Section, HeaderNav } = components;
    const { headerNavElems } = data;
    const { useScreenSize } = hooks;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { width } = useScreenSize();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <Section tagName="header" className="header">
            <img className="header__logo" src={svgImages['logo']} alt="Vector illustration" />
            <button className="header__button" onClick={toggleMenu}><img className="header__button-img" src={isMenuOpen ? svgImages['cross'] : svgImages['burger']} alt="" /></button>
            <nav className="header__nav" style={{ display: isMenuOpen || width > 768 ? "block" : "none" }}>
                <ul className="header__list">
                    {headerNavElems.map(elem => (
                        <li key={elem.id} className="header__item">
                            <HeaderNav className="header__link" elem={elem} />
                        </li>
                    ))}
                </ul>
            </nav>
        </Section>
    );
};

