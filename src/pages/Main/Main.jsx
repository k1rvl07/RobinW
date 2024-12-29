import React from "react";

import { imgImages } from "@assets";
import components from "@components";
import data from "@data";

export const Main = () => {
    const { Header, Section, ExperienceCard, SocialSectionWhite } = components;
    const { experienceCard } = data;
    return (
        <>
            <Header />
            <main>
                <Section tagName="section" className="hero">
                    <img className="hero__img" src={imgImages.hero} alt="" />
                    <div className="hero__content">
                        <h1 className="hero__title">I’m Robin Williams. A Product Designer <span className="hero__title-span">based in Italy.</span></h1>
                        <p className="hero__text">I’m probably the most passionate designer you will ever get to work with. If you have a great project that needs some amazing skills, I’m your guy.</p>
                    </div>
                </Section>
                <Section tagName="section" className="experience" isHasHeading={true} heading="Companies I have worked
                        for in the past" headingType="white" isHasSubHeading={true} subheading="WORK EXPERIENCE">
                    <div className="card__container">
                        {experienceCard.map(experienceCard => (
                            <ExperienceCard key={experienceCard.id} experienceCard={experienceCard} />
                        ))}
                    </div>
                </Section>
                <SocialSectionWhite
                    heading="Philosophy & values"
                    text="I think everyone wants the same thing - relationship with humanity, peace with the metaphysical, and experience with the universe. I try to grasp these things with my values: authenticity, creativity, & hospitality."
                    link='More about me'
                    href='#'
                    img={imgImages.sphere} />
            </main>
        </>
    );
};