import { components } from "@modules";
import React from "react";

export const SkillsetCard = ({ icon, title, text }) => {
  const { Heading, Text } = components;
  return (
    <div className="card">
      <img src={icon} alt="" />
      <Heading level={3} className="card__title">
        {title}
      </Heading>
      <Text type="white" className="card__text" size="small">
        {text}
      </Text>
    </div>
  );
};
