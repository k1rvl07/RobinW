import React from "react"

export const HeadingSecond = ({ isHasSubHeading = false, subheading, children }) => {
    if (isHasSubHeading) {
        return (
            <div className="heading-container">
                <p className="heading-container__subheading">{subheading}</p>
                <h2 className="heading-container__heading-second">{children}</h2>
            </div>
        )
    } else {
        return (
            <h2 className="heading-second">
                {children}
            </h2>
        )
    }
}
