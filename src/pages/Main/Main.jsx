import React from "react";

import { imgImages } from "@assets";
import components from "@components";

export const Main = () => {
    const { Header, Section, Container } = components;
    return (
        <>
            <Header />
            <main>
                <Section tagName="section" className="hero">
                    <h1 className="hero__title">I’m Robin Williams. A Product Designer <span className="hero__title-span">based in Italy.</span></h1>
                    <p className="hero__text">I’m probably the most passionate designer you will ever get to work with. If you have a great project that needs some amazing skills, I’m your guy.</p>
                </Section>
            </main>
        </>
    );
};