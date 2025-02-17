import { assets, components } from "@exports";
import React from "react";

export const ProjectCard = ({ projectCard }) => {
  const { Heading, Text } = components;
  return (
    <div className="card">
      <img className="card__img" src={assets[projectCard.img]} alt="" />
      <div className="card__content">
        <Heading level={3} className="card__title">
          {projectCard.title}
        </Heading>
        <Text color="white" className="card__text" size="small">
          {projectCard.text}
        </Text>
      </div>
    </div>
  );
};
