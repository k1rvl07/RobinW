import React from "react";
import { imgImages, svgImages, components, data, hooks } from "@modules";
import { SponsorSlide } from "@components/SponsorSlide";
import { Button } from "@components/Button";

export const Main = () => {
    const { Header, Section, ExperienceCard, SocialSectionWhite, SkillsetCard, ProjectCard } = components;
    const { experienceCards, skillsetCards, sponsorSlides, projectCards } = data;
    const { useInfiniteScroll, useScreenSize } = hooks;
    const { width: screenWidth } = useScreenSize();
    const { containerRef } = useInfiniteScroll(2, 1440);
    const duplicatedSlides = screenWidth >= 1440 ? [...sponsorSlides, ...sponsorSlides] : sponsorSlides;

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
                        {experienceCards.map(experienceCard => (
                            <ExperienceCard key={experienceCard.id} experienceCard={experienceCard} />
                        ))}
                    </div>
                </Section>
                <SocialSectionWhite
                    heading="Philosophy & values"
                    text="I think everyone wants the same thing - relationship with humanity, peace with the metaphysical, and experience with the universe. I try to grasp these things with my values: authenticity, creativity, & hospitality."
                    link='More about me'
                    img={imgImages.sphere} />
                <Section tagName="section" className="skillset" isHasHeading={true} heading="Skillset" headingType="white" isHasText={true} text="With skills in over 4 different fields of design, I am the perfect person to hire when it comes to a full fledged project. Whatever your needs are, I can pretty much take on any challenge." textType="black">
                    <div className="card__container">
                        {skillsetCards.map(skillsetCard => (
                            <SkillsetCard key={skillsetCard.id} icon={svgImages[skillsetCard.icon]} title={skillsetCard.title} text={skillsetCard.text} />
                        ))}
                    </div>
                </Section>
                <Section tagName="section" className="sponsor" isHasContainer={false}>
                    <div className="slider" ref={containerRef}>
                        <div className="slider__slides">
                            {duplicatedSlides.map((sponsorSlide, index) => (
                                <SponsorSlide key={`${sponsorSlide.id}-${index}`} icon={svgImages[sponsorSlide.icon]} className="slider__slide" />
                            ))}
                        </div>
                    </div>
                </Section>
                <Section tagName="section" className="project" isHasHeading={true} heading="Work that I’ve done for the past 8 years" headingType="white" isHasSubHeading={true} subheading="MY PROJECTS">
                        {projectCards.map(projectCard => (
                            <ProjectCard key={projectCard.id} projectCard={projectCard} />
                        ))}
                        <Button className="project__button">VIEW ALL PROJECTS</Button>
                </Section>
                <SocialSectionWhite
                    heading="Instagram"
                    text="If you area a person who enjoys photography, then I highly recommend that you check out my Instagram. I’m an avid traveller and I capture the best moments that I would love to cherish with the world"
                    link='More about me'
                    img={imgImages.plane}
                />
            </main>
        </>
    );
};