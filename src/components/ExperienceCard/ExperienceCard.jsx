import React from "react"
import { components } from "@modules";

export const ExperienceCard = ({ experienceCard }) => {
    const { HeadingThird, TextSmall } = components;
    return (
        <div className="card">
            <p className="card__num">0{experienceCard.id}</p>
            <HeadingThird className="card__title"><span className="card__company" style={{color: experienceCard.color}}>{experienceCard.company}</span>, {experienceCard.profession}</HeadingThird>
            <TextSmall type="white" className="card__text">{experienceCard.text}</TextSmall>
        </div>
    )
}
