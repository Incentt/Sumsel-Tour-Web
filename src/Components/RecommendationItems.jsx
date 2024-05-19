import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import nofound from '../img/notfound.png';
import axios from 'axios';

const RecommendationItems = ({ place, language }) => {
    const [image, setImage] = useState('');
    const [website, setWebsite] = useState('');
    const [review, setReview] = useState('');
    const APIKEY = process.env.REACT_APP_TRIP_API_KEY;
    const placeId = place.id;
    const rating = parseInt(place.rating);
    const renderRating = () => {
        const start = [];
        for (let i = 0; i < 5; i++) {

            if (i < rating) {
                start.push(<FontAwesomeIcon key={i} icon={faStar} style={{ color: 'gold', marginRight: '5px' }} />);
            } else {
                start.push(<FontAwesomeIcon key={i} icon={faStar} style={{ color: 'lightgray', marginRight: '5px' }} />);
            }
        }
        return start;
    }
    useEffect(() => {
        const fetchPlaceDetails = async () => {
            try {

                const response = await axios.get(
                    `https://places.googleapis.com/v1/places/${placeId}`,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'X-Goog-Api-Key': APIKEY,
                            'X-Goog-FieldMask': 'id,displayName,photos'
                        }
                    }
                );

                setImage(response.data.photos[0].name);
            } catch (error) {
                console.error('Error fetching place details:', error);
            }
        };

        fetchPlaceDetails();
    }, [APIKEY, placeId]);

    const photoUrl = `https://places.googleapis.com/v1/${image}/media?maxHeightPx=400&maxWidthPx=400&key=${APIKEY}`;

    return (
        <div className="col-md-4 mb-5">
            <div className="card h-100 d-flex flex-column">
                <div className="image-container">
                    {photoUrl ? (
                        <img src={photoUrl} alt="User"className="imagekotak" />
                    ) : (
                        <img src={nofound} alt="User"className="imagekotak" />
                    )}
                   
                </div>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{place.displayName.text}</h5>
                    <div className="mb-2 d-flex">
                        <p className='m-0 me-2'>
                            {place.rating && place.rating}
                        </p>
                        <div className="d-flex align-items-center justify-content-center">
                            {place.rating && renderRating()}
                        </div>

                    </div>
                    {place.formattedAddress && (
                        <p className="card-text">{place.formattedAddress}</p>
                    )}
                    <div className="mt-auto">
                        <div className="buttonGroup d-flex">


                            {place.googleMapsUri && (
                                <a href={place.googleMapsUri} target="_blank" rel="noopener noreferrer" className="btn me-2 text-white">
                                    {language === 'EN' ? 'View on Google Maps' : 'Lihat Peta Google'}
                                </a>
                            )}
                            {review && (
                                <a href={review} target="_blank" rel="noopener noreferrer" className="btn text-white">
                                    Check Review
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default RecommendationItems;
