import { assets, components } from "@exports";
import React from "react";

export const AboutCard = ({ aboutCard }) => {
  const { Heading, Text } = components;
  return (
    <div className="card">
      <img className="card__img" src={assets[aboutCard.img]} alt="" />
      <div className="card__content">
        <Heading level={3} className="card__title">
          {aboutCard.title}
        </Heading>
        <Text color="white" className="card__name">
          {aboutCard.name}
        </Text>
        <Text color="white" className="card__company">
          {aboutCard.company}
        </Text>
      </div>
    </div>
  );
};
