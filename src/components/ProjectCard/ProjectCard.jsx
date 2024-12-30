import React from "react"
import { imgImages, components } from "@modules"

export const ProjectCard = ( { projectCard } ) => {
    const { HeadingThird, TextSmall } = components;
    return (
        <div className="card">
            <img className="card__img" src={imgImages[projectCard.img]} alt="" />
            <div className="card__content">
                <HeadingThird className="card__title">{projectCard.title}</HeadingThird>
                <TextSmall type="black" className="card__text">{projectCard.text}</TextSmall>
            </div>
        </div>
    )
}
