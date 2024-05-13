import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import nofound from '../img/notfound.png';

function RecommendationItems({ place }) {
    const rating = parseInt(place.rating);
    <FontAwesomeIcon icon="fa-solid fa-star" />

    const renderRating = () => {
        const circles = [];
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                circles.push(<FontAwesomeIcon key={i} icon={faStar} style={{ color: 'gold', marginRight: '5px' }} />);
            } else {
                circles.push(<FontAwesomeIcon key={i} icon={faStar} style={{ color: 'lightgray', marginRight: '5px' }} />);
            }
        }
        return circles;
    };

    return (

        <div className="col-md-4 mb-5">
        <div className="card h-100 d-flex flex-column">
            {place.photo ? (
                <div className="image-container">
                    <img
                        src={place.photo.images.medium.url}
                        className="imagekotak"
                        alt={place.name}
                    />
                </div>
            ) : (
                <div className="image-container">
                    <img
                        src={nofound}
                        className="imagekotak"
                        alt="Not Found"
                    />
                </div>
            )}
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{place.name}</h5>
                <div className="mb-2">
                    {renderRating()}
                </div>
                {place.description && (
                    <p className="card-text">{place.description}</p>
                )}
                {place.address && (
                    <p className="card-text">{place.address}</p>
                )}
                <div className="mt-auto">
                    {place.website && (
                        <a href={place.website} target="_blank" className="btn text-white fw-bold me-2">Go to Website</a>
                    )}
                    {place.web_url && (
                        <a href={place.web_url} target="_blank" className="btn text-white fw-bold">Check Review</a>
                    )}
                </div>
            </div>
        </div>
    </div>
    
    );
}

export default RecommendationItems;
