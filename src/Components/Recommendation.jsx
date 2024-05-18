import React, { useState, useEffect } from 'react';
import RecommendationItems from './RecommendationItems';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import loadingGif from '../img/Loading.gif';

const Recommendation = ({ language }) => {
  const [loading, setLoading] = useState(true);
  const [places, setPlaces] = useState([]);
  const navigate = useNavigate();
  const APIKEY = process.env.REACT_APP_TRIP_API_KEY;


  const Judul = language === 'EN' ? 'Explore Sumatra Selatan' : 'Jelajahi Sumatra Selatan';


  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const url = `https://api.content.tripadvisor.com/api/v1/location/search?searchQuery=Sumatra%20Selatan&category=attractions&radius=100000&radiusUnit=KM&language=en&key=${APIKEY}`;
        const response = await axios.get(url);
        console.log("Response from TripAdvisor API:", response.data);
        setPlaces(response.data);
        setLoading(false); // Update loading state once data is fetched
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // Update loading state in case of error
      }
    };

    fetchPlaces(); // Call the function to fetch data when component mounts
  }, [APIKEY]); // Include APIKEY in dependency array to trigger effect when it changes


  function goToRecommendation() {
    navigate('/recommendation');
  }

  return (
    <div className="p-5 d-flex flex-column align-items-center justify-content-center bg-light">
      <h1 className="mb-5">{Judul}</h1>
      {loading ? (
        <div className='mt-5 mb-5'>
          <img src={loadingGif} alt="Loading..." />
        </div>
      ) : (
        <div className="container">
          <div className="cardBox row gx-5">

            {places.data && places.data.length > 0 ? (
              places.data.slice(0, 1).map((place, index) => (
                place ? (
                  <RecommendationItems key={index} place={place} />
                ) : null
              ))
            ) : (
              <p>Too many requests</p>
            )}

            <div className='mt-3 d-flex justify-content-center'>
              <button type="button"
                onClick={goToRecommendation}
                className="loadmore btn text-white fw-bold rounded-pill border-none">Load More</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Recommendation;
