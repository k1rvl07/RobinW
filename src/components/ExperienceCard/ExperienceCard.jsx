import React from "react"
import { components } from "@modules";

export const ExperienceCard = ({ experienceCard }) => {
    const { Heading, Text } = components;
    return (
        <div className="card">
            <p className="card__num">0{experienceCard.id}</p>
            <Heading level={3} className="card__title"><span className="card__company" style={{color: experienceCard.color}}>{experienceCard.company}</span>, {experienceCard.profession}</Heading>
            <Text type="white" className="card__text" size="small">{experienceCard.text}</Text>
        </div>
    )
}