import { useState } from "react";
import components from "@components";
import { svgImages } from '@assets';
import data from '@data';
import hooks from "@hooks";

export const Header = () => {
    const { Section, HeaderNav } = components;
    const { headerNavElems } = data;
    const { UseScreenSize } = hooks;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { width } = UseScreenSize();

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

