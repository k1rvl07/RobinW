import React from "react"
import classNames from "classnames"

export const HeadingSecond = ({ isHasSubHeading = false, subheading, type, children }) => {
    const headingClass = {
        'heading-second-white': type === 'white',
        'heading-second-black': type === 'black',
    };
    if (isHasSubHeading) {
        return (
            <div className="heading-container">
                <p className="heading-container__subheading">{subheading}</p>
                <h2 className={classNames("heading-container__heading-second", headingClass)}>{children}</h2>
            </div>
        )
    } else {
        return (
            <h2 className={classNames(headingClass)}>{children}</h2>
        )
    }
}
