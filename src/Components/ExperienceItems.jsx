import React, { useState } from 'react';

//Experience Cards Components
function ExperienceItems({ experience }) {
    const [isHovered, setIsHovered] = useState(false);

    function handleMouseEnter() {
        setIsHovered(true);
    }

    function handleMouseLeave() {
        setIsHovered(false);
    }

    function showImage() {
        window.open(experience.urls.regular, '_blank');
    }

    return (
        <div className="col-md-4 mb-5">
            <div className="portrait">
                <div
                    className="experienceContainer"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <img
                        onClick={showImage}
                        src={experience.urls.small}
                        className="imagekotak"
                        alt={experience.alt_description}
                    />
                    <div
                        className={`experienceDescription ${isHovered ? 'hovered' : 'notHovered'}`}
                    >
                        <p>{experience.alt_description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExperienceItems;
