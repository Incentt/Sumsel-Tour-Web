import React, { useState, useEffect } from 'react';
import RecommendationItems from './RecommendationItems';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import loadingGif from '../img/Loading.gif'


const apiKey = process.env.REACT_APP_TRIP_API_KEY;
function Recommendation() {

    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    function goToRecomendation() {
        navigate('/recommendation');
    }

    const CACHE_MAX_AGE = 60 * 60 * 1000; // 1 hour (in milliseconds)

    const api = axios.create({
      baseURL: 'https://travel-advisor.p.rapidapi.com',
      headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
      },
    });
    
    const cache = {};
    
    // Axios request interceptor to check if the response is already cached
    api.interceptors.request.use(config => {
      const cacheKey = config.url;
      const cachedData = cache[cacheKey];
    
      if (cachedData && Date.now() - cachedData.timestamp < CACHE_MAX_AGE) {
        // If cached data exists and it's not expired, return it
        return Promise.resolve(cachedData.response);
      }
    
      return config;
    });
    
    // Axios response interceptor to cache the response
    api.interceptors.response.use(response => {
      const cacheKey = response.config.url;
      cache[cacheKey] = {
        response,
        timestamp: Date.now(),
      };
      return response;
    });
    
    const fetchData = async () => {
      try {
        const response = await api.get('/attractions/list', {
          params: {
            location_id: '2301786',
            currency: 'USD',
            lang: 'en_US',
            lunit: 'km',
            sort: 'recommended',
            limit: 30,
          },
        });
        return response.data.data;
      } catch (error) {
        console.error(error);
        throw error; // Rethrow the error to be caught by the caller
      }
    };
    
    // In your component
    useEffect(() => {
      const fetchDataAndSetState = async () => {
        try {
          const data = await fetchData();
          setPlaces(data);
          setLoading(false);
          console.log(data);
        } catch (error) {
          setLoading(false); // Ensure loading state is updated even if there's an error
        }
      };
    
      fetchDataAndSetState(); // Call the function to fetch data when the component mounts
    }, []);
    
    return (
        <div className="p-5 d-flex flex-column align-items-center justify-content-center bg-light">
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
                        {/** {places.map((place, index) => (
                        // Check if place.name exists and the rendered count is less than 3
                        place.name && renderedCount < 3 && (
                            <RecommendationItems key={index} place={place} />
                        )
                    ))} */}
                        {places[10].photo && <RecommendationItems key={10} place={places[10]} />}
                        {places[1].photo && <RecommendationItems key={1} place={places[1]} />}
                        {places[2].photo && <RecommendationItems key={2} place={places[2]} />}
                        {places[3].photo && <RecommendationItems key={3} place={places[3]} />}
                        {places[4].photo && <RecommendationItems key={4} place={places[4]} />}
                        {places[5].photo && <RecommendationItems key={5} place={places[5]} />}
                        <div className='mt-3 d-flex justify-content-center'>
                            <button type="button"
                                onClick={goToRecomendation}
                                className="loadmore btn text-white fw-bold rounded-pill border-none">Load More</button>

                        </div>

                    </div>
                </div>
            )}
        </div>
    );
}

export default Recommendation;
