import React, { useState } from 'react';


function ExperienceItems({ experience }) {

    function showImage(){
        window.open(experience.urls.regular, '_blank');

    }
    return (
        <div className="col-md-4 mb-5">
            <div className="card">
                <div
                    className="experienceContainer image-container"
          
                >
                    <img onClick={showImage}
                        src={experience.urls.regular}
                        className="imagekotak"
                        alt={experience.alt_description}
                    />
                    { (
                        <div className="experienceDescription">
                            <p>{experience.alt_description}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ExperienceItems;
