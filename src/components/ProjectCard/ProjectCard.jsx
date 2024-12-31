import { components, imgImages } from "@modules";
import React from "react";

export const ProjectCard = ({ projectCard }) => {
  const { Heading, Text } = components;
  return (
    <div className="card">
      <img className="card__img" src={imgImages[projectCard.img]} alt="" />
      <div className="card__content">
        <Heading level={3} className="card__title">
          {projectCard.title}
        </Heading>
        <Text type="white" className="card__text" size="small">
          {projectCard.text}
        </Text>
      </div>
    </div>
  );
};
