import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import nofound from '../img/notfound.png';
import axios from 'axios'; // Import axios at the top

function RecommendationItems({ place }) {
    const [image, setImage] = useState('');
    const [website, setWebsite] = useState('');
    const [review, setReview] = useState('');
    const APIKEY = process.env.REACT_APP_TRIP_API_KEY;

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const options = {
                    method: 'GET',
                    url: `https://api.content.tripadvisor.com/api/v1/location/${place.location_id}/photos?language=en&key=${APIKEY}`,
                    headers: { accept: 'application/json' }
                };
                const response = await axios.request(options);
                if (response.data && response.data.data.length > 0) {
                    // Set the image URL if available
                    setImage(response.data.data[0].images.large.url);
                } else {
                    // Set a default image if no image is available
                    setImage(nofound);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchImage();

        const fetchWeb = async () => {
            try {
                const options = {
                    method: 'GET',
                    url: `https://api.content.tripadvisor.com/api/v1/location/${place.location_id}/details?language=en&limit=1&currency=USD&key=${APIKEY}`,
                    headers: { accept: 'application/json' }
                };
                const response = await axios.request(options);

                if (response.data) {
                    // Set the image URL if available
                    setWebsite(response.data.website);
                    setReview(response.data.web_url)
                } else {

                }
            } catch (error) {
                console.error(error);
            }
        }
        fetchWeb();

    }, [place.location_id, APIKEY]);

    return (
        <div className="col-md-4 mb-5">
        <div className="card h-100 d-flex flex-column">
            <div className="image-container">
                <img
                    src={image}
                    className="imagekotak"
                />
            </div>
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{place.name}</h5>
                {place.address_obj && place.address_obj.address_string && (
                    <p className="card-text">{place.address_obj.address_string}</p>
                )}
                <div className="mt-auto">
                    <div className="buttonGroup d-flex">
                        {website && (
                            <a href={website} target="_blank" rel="noopener noreferrer" className="btn me-2 text-white">
                                Visit Website
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
