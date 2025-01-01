import { assets, components, data, hooks } from "@exports";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Main = () => {
  const {
    Header,
    Section,
    ExperienceCard,
    SocialSectionWhite,
    SkillsetCard,
    ProjectCard,
    AboutCard,
    SponsorSlide,
    Button,
    Field
  } = components;
  const {
    EXPERIENCE_CARDS,
    SKILLSET_CARDS,
    SPONSOR_SLIDES,
    PROJECT_CARDS,
    ABOUT_CARDS,
    PHOTOGRAPHY_BUTTONS,
    PHOTOGRAPHY_IMGS,
    FEEDBACK_FIELDS
  } = data;
  const { useInfiniteScroll, useScreenSize } = hooks;
  const { width: screenWidth } = useScreenSize();
  const { containerRef } = useInfiniteScroll(2, 1440);
  const duplicatedSlides =
    screenWidth >= 1440 ? [...SPONSOR_SLIDES, ...SPONSOR_SLIDES] : SPONSOR_SLIDES;
  const [activePhotographyButton, setActivePhotographyButton] = useState(1);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = PHOTOGRAPHY_IMGS.map((img) => {
        return new Promise((resolve, reject) => {
          const image = new Image();
          image.src = assets[img.image];
          image.onload = resolve;
          image.onerror = reject;
        });
      });

      await Promise.all(imagePromises);
      setImagesLoaded(true);
    };

    loadImages();
  }, [PHOTOGRAPHY_IMGS]);

  const handlePhotographyButtonClick = (id) => {
    setActivePhotographyButton(id);
  };

  const getActiveImages = (activeButton) => {
    switch (activeButton) {
      case 1:
        return PHOTOGRAPHY_IMGS.slice(0, 4);
      case 2:
        return PHOTOGRAPHY_IMGS.slice(4, 8);
      case 3:
        return PHOTOGRAPHY_IMGS.slice(8, 12);
      case 4:
        return PHOTOGRAPHY_IMGS.slice(12, 16);
      default:
        return [];
    }
  };

  const activeImages = getActiveImages(activePhotographyButton);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
    exit: { opacity: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <>
      <Header />
      <main>
        <Section className="hero">
          <img className="hero__img" src={assets.hero} alt="" />
          <div className="hero__content">
            <h1 className="hero__title">
              I’m Robin Williams. A Product Designer{" "}
              <span className="hero__title-span">based in Italy.</span>
            </h1>
            <p className="hero__text">
              I’m probably the most passionate designer you will ever get to work with. If you have
              a great project that needs some amazing skills, I’m your guy.
            </p>
          </div>
        </Section>
        <Section
          className="experience"
          isHasHeading={true}
          heading="Companies I have worked for in the past"
          headingType="white"
          isHasSubHeading={true}
          subheading="WORK EXPERIENCE"
        >
          <div className="card__container">
            {EXPERIENCE_CARDS.map((experienceCard) => (
              <ExperienceCard key={experienceCard.id} experienceCard={experienceCard} />
            ))}
          </div>
        </Section>
        <SocialSectionWhite
          heading="Philosophy & values"
          text="I think everyone wants the same thing - relationship with humanity, peace with the metaphysical, and experience with the universe. I try to grasp these things with my values: authenticity, creativity, & hospitality."
          link="More about me"
          img={assets.sphere}
        />
        <Section
          className="skillset"
          isHasHeading={true}
          heading="Skillset"
          headingType="white"
          isHasText={true}
          text="With skills in over 4 different fields of design, I am the perfect person to hire when it comes to a full fledged project. Whatever your needs are, I can pretty much take on any challenge."
          textType="white"
        >
          <div className="card__container">
            {SKILLSET_CARDS.map((skillsetCard) => (
              <SkillsetCard
                key={skillsetCard.id}
                icon={assets[skillsetCard.icon]}
                title={skillsetCard.title}
                text={skillsetCard.text}
              />
            ))}
          </div>
        </Section>
        <Section className="sponsor" isHasContainer={false}>
          <div className="slider" ref={containerRef}>
            <div className="slider__slides">
              {duplicatedSlides.map((sponsorSlide, index) => (
                <SponsorSlide
                  key={`${sponsorSlide.id}-${index}`}
                  icon={assets[sponsorSlide.icon]}
                  className="slider__slide"
                />
              ))}
            </div>
          </div>
        </Section>
        <Section
          className="project"
          isHasHeading={true}
          heading="Work that I’ve done for the past 8 years"
          headingType="white"
          isHasSubHeading={true}
          subheading="MY PROJECTS"
        >
          {PROJECT_CARDS.map((projectCard) => (
            <ProjectCard key={projectCard.id} projectCard={projectCard} />
          ))}
          <Button className="project__button">VIEW ALL PROJECTS</Button>
        </Section>
        <SocialSectionWhite
          heading="Instagram"
          text="If you area a person who enjoys photography, then I highly recommend that you check out my Instagram. I’m an avid traveller and I capture the best moments that I would love to cherish with the world"
          link="More about me"
          img={assets.plane}
        />
        <Section
          className="dribble"
          isHasHeading={true}
          heading="Dribbble"
          headingType="white"
          isHasLink={true}
          link="Follow me on Dribbble"
          linkType="white"
          isHasText={true}
          text="Each dribbble shot is made with love and care. Do check out my work on Dribbble. Likes and comments are appreciated."
          textType="white"
        >
          <img
            className="dribble__img"
            src={
              screenWidth >= 1440
                ? assets.dribble_lg
                : screenWidth >= 768
                  ? assets.dribble_md
                  : assets.dribble_sm
            }
            alt=""
          />
        </Section>
        <Section
          className="about"
          isHasHeading={true}
          heading="This is what people say about me"
          headingType="white"
          isHasText={true}
          text="Here are a few lines from people who I have worked with over the past 8+ years in my design career."
          textType="white"
          isHasLink={true}
          link="See all testimonials"
          linkType="white"
        >
          <div className="card__container">
            {ABOUT_CARDS.map((aboutCard) => (
              <AboutCard key={aboutCard.id} aboutCard={aboutCard} />
            ))}
          </div>
        </Section>
        <Section
          className="photography"
          isHasHeading={true}
          heading="Photography"
          headingType="white"
          isHasText={true}
          text="Here is a collection of my best travel pictures that I took while travelling places all around the world. "
          textType="white"
        >
          <div className="photography__button-container">
            {PHOTOGRAPHY_BUTTONS.map((photographyButton) => (
              <Button
                key={photographyButton.id}
                size="small"
                className={`photography__button ${activePhotographyButton === photographyButton.id
                    ? "photography__button--active"
                    : ""
                  }`}
                onClick={() => handlePhotographyButtonClick(photographyButton.id)}
              >
                {photographyButton.text}
              </Button>
            ))}
          </div>
          {imagesLoaded && (
            <AnimatePresence mode="wait">
              <motion.div
                key={activePhotographyButton}
                className="photography__img-container"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.5 }}
              >
                {activeImages.map((img) => (
                  <motion.img
                    key={img.id}
                    className="photography__img"
                    src={assets[img.image]}
                    alt={`Photography ${img.id}`}
                    variants={itemVariants}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          )}
        </Section>
        <Section className="feedback" isHasHeading={true} heading="Let’s get started" headingType="white" isHasText={true} text="Now that you know a lot about me, let me know if you are interested to work with me." textType="white">
          <form action="" className="feedback__form">
            {FEEDBACK_FIELDS.map((field) => (
              <Field key={field.id} type={field.type} tagName={field.tagName} label={field.label} id={field.id} />
            ))}
            <Button type="submit" className="feedback__button">Let’s get started</Button>
          </form>
        </Section>
      </main>
    </>
  );
};
