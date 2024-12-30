import React from "react"
import { components } from "@modules"
export const SkillsetCard = ({ icon, title, text }) => {
    const { HeadingThird, TextSmall } = components;
    return (
        <div className="card">
            <img src={icon} alt="" />
            <HeadingThird className="card__title">{title}</HeadingThird>
            <TextSmall type="white" className="card__text">{text}</TextSmall>
        </div>
    )
}
