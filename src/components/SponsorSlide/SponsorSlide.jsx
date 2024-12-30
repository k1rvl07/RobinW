import React from "react"

export const SponsorSlide = ({ icon, className }) => {
    return (
        <div className={className}>
            <img src={icon} alt="" loading="lazy" />
        </div>
    )
}
