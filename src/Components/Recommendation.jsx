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

  const textQuery = "Rekomendasi Wisata Sumatra Selatan";

  useEffect(() => {
    //Fetch API
    const fetchPlaces = async () => {
      const payload = {
        textQuery: textQuery
      };

      try {
        const response = await axios.post(
          'https://places.googleapis.com/v1/places:searchText',
          payload,
          {
            headers: {
              'Content-Type': 'application/json',
              'X-Goog-Api-Key': APIKEY,
              'X-Goog-FieldMask': 'places.displayName,places.formattedAddress,places.websiteUri,places.rating,places.id,places.googleMapsUri,places.photos'
            }
          }
        );
        console.log(response.data.places);
        setPlaces(response.data.places || []);
        setLoading(false);
      }
      catch (error) {
        console.error('Error fetching places');
      }
    };

    fetchPlaces();
  }, [APIKEY]);


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

            {places && places.length > 0 ? (
              places.slice(0, 6).map((place, index) => (
                place ? (
                  <RecommendationItems key={index} place={place} language={language} />
                ) : null
              ))
            ) : (
              <p>Too many requests</p>
            )}

            <div className='mt-3 d-flex justify-content-center'>
              <button type="button"
                onClick={goToRecommendation}
                className="loadmore btn text-white fw-bold rounded-pill border-none">
                {language === 'EN' ? 'Load More' : 'Muat Lebih Banyak'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Recommendation;
