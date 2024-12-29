import React from "react"
import components from "@components"

export const ExperienceCard = ({ experienceCard }) => {
    const { HeadingThird, Text } = components;
    return (
        <div className="card">
            <p className="card__num">0{experienceCard.id}</p>
            <HeadingThird className="card__title"><span className="card__company" style={{color: experienceCard.color}}>{experienceCard.company}</span>, {experienceCard.profession}</HeadingThird>
            <Text type="black" className="card__text">{experienceCard.text}</Text>
        </div>
    )
}
