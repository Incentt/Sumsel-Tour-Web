import React, { useState, useEffect } from 'react';
import RecommendationItems from '../Components/RecommendationItems';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import loadingGif from '../img/Loading.gif'

const apiKey = process.env.REACT_APP_TRIP_API_KEY;
function RecommendationPages() {

    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    function goToRecomendation() {
        navigate('/recommendation');
    }


    useEffect(() => {

        const fetchData = async () => {
            try {
                const options = {
                    method: 'GET',
                    url: 'https://travel-advisor.p.rapidapi.com/attractions/list',
                    params: {
                        location_id: '2301786',
                        currency: 'USD',
                        lang: 'en_US',
                        lunit: 'km',
                        sort: 'recommended',
                       

                    },
                    headers: {
                        'X-RapidAPI-Key': apiKey,
                        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
                    }
                };

                const response = await axios.request(options);
                setPlaces(response.data.data);
                setLoading(false);
                console.log(response.data.data)
            } catch (error) {
                console.error(error);
            }
        };

        fetchData(); // Call the function to fetch data when the component mounts
    }, []); // Empty dependency array ensures this effect runs only once when the component mounts

    return (
        <div className="mt-5 p-5 d-flex flex-column align-items-center justify-content-center">
            <h1 className="mb-5">Explore Sumatra Selatan</h1>
            {loading ? ( // Render loading screen if loading is true
                <div className='mt-5 mb-5'>
                    <div className='mt-5 mb-5'></div>
                    <img src={loadingGif} />
                    <div className='mt-5 mb-5 min-vh-45'></div>
                </div>
            ) : (
                <div className="container">
                    <div className="cardBox row gx-5">
                        {places.map((place, index) => (

                            place.name && (
                                <RecommendationItems key={index} place={place} />
                            )
                        ))}


                    </div>

                </div>
            )}
        </div>
    );
}

export default RecommendationPages;
