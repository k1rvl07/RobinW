import { components } from "@exports";
import React from "react";

export const ExperienceCard = ({ experienceCard }) => {
  const { Heading, Text } = components;

  const companyColorClass = `card__company--${experienceCard.color}`;

  return (
    <div className="card">
      <p className="card__num">0{experienceCard.id}</p>
      <Heading level={3} className="card__title">
        <span className={`card__company ${companyColorClass}`}>{experienceCard.company}</span>,{" "}
        {experienceCard.profession}
      </Heading>
      <Text color="white" className="card__text" size="small">
        {experienceCard.text}
      </Text>
    </div>
  );
};
