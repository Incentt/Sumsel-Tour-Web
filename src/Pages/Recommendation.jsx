import React, { useState, useEffect } from 'react';
import RecommendationItems from '../Components/RecomendationItems';
import 'bootstrap/dist/css/bootstrap.min.css';

function Recommendation() {
    const [places, setPlaces] = useState([]);
    const [googleMapsLoaded, setGoogleMapsLoaded] = useState(false); // Track Google Maps API loading status
    const YOUR_API_KEY = 'AIzaSyAPZ13qE5oS5g2bZdvV8L6tMZnUSQhk67M'
    useEffect(() => {
        const loadGooglePlacesAPI = async () => {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=${YOUR_API_KEY}&libraries=places`;
            script.async = true;

            // Handle script load and errors gracefully
            script.onload = () => setGoogleMapsLoaded(true);
            script.onerror = (error) => console.error('Error loading Google Maps API:', error);

            document.body.appendChild(script);
        };

        loadGooglePlacesAPI();
    }, []);

    const executeSearch = async () => {
        if (!googleMapsLoaded) {
            console.warn('Google Maps API not loaded yet. Search will be delayed.');
            return;
        }

        const request = {
            location: { lat: -3.3194, lng: 104.9144 },
            radius: 20000,
            type: 'tourist_attraction',
        };

        try {
            const service = new window.google.maps.places.PlacesService(document.createElement('div'));
            const response = await new Promise((resolve, reject) => {
                service.nearbySearch(request, (results, status) => {
                    if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                        resolve(results);
                    } else {
                        reject(new Error(`Error fetching nearby locations: ${status}`));
                    }
                });
            });
            setPlaces(response);
        } catch (error) {
            console.error('Error fetching nearby locations:', error);
        }
    };

    useEffect(() => {
        executeSearch();
    }, [googleMapsLoaded]); // Re-execute search only when Google Maps API is loaded

    return (
        <div className="mt-5 d-flex flex-column align-items-center justify-content-center">
            <h1 className="mb-5">Explore Sumatra Selatan</h1>
            <div className="container">
                <div className="cardBox row gx-5">
                    {places.map((place, index) => (
                        <RecommendationItems key={index} place={place} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Recommendation;