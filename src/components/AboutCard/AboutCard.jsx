import React from "react";
import { imgImages, components } from "@modules";

export const AboutCard = ({ aboutCard }) => {
  const { Heading, Text } = components;
  return (
    <div className="card">
      <img className="card__img" src={imgImages[aboutCard.img]} alt="" />
      <div className="card__content">
        <Heading level={3} className="card__title">
          {aboutCard.title}
        </Heading>
        <Text type="white" className="card__name">
          {aboutCard.name}
        </Text>
        <Text type="white" className="card__company">
          {aboutCard.company}
        </Text>
      </div>
    </div>
  );
};
