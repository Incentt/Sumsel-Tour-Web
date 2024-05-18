import React, { useState, useEffect } from 'react';
import RecommendationItems from '../Components/RecommendationItems';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import loadingGif from '../img/Loading.gif'
const RecommendationPages = ({ language }) => {
    const Judul = language === 'EN' ? 'Explore Sumatra Selatan' : 'Jelajahi Sumatra Selatan';

    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const [activeButton, setActiveButton] = useState('attractions');
    const [filter, setFilter] = useState('attractions');
    const [search, setSearch] = useState('Sumatra Selatan');
    const [inputValue, setInputValue] = useState('');

    const handleFilterChange = (filterType) => {
        setActiveButton(filterType);
        setFilter(filterType);
        console.log('Filter selected:', filterType);
    };
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    const handleFormSubmit = (event) => {
        event.preventDefault();
        setSearch(inputValue);
    };


    const APIKEY = process.env.REACT_APP_TRIP_API_KEY;

    useEffect(() => {
        const fetchPlaces = async () => {
            try {
                const url = `https://api.content.tripadvisor.com/api/v1/location/search?searchQuery=${search}&category=${filter}&radius=100000&radiusUnit=KM&language=en&key=${APIKEY}`;
                const response = await axios.get(url);
                console.log("Response from TripAdvisor API:", response.data);
                setPlaces(response.data);
                setLoading(false); // Update loading state once data is fetched
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false); // Update loading state in case of error
            }
        };
        console.log(filter);
        fetchPlaces(); // Call the function to fetch data when component mounts
    }, [APIKEY, search, filter]); // Include APIKEY in dependency array to trigger effect when it changes


    return (
        <div className="mt-5 p-5 d-flex flex-column align-items-center justify-content-center">
            <h1 className="mb-3">{Judul}</h1>

            <div class="container mt-5">
                <form className="form-inline my-2 my-lg-0 d-flex justify-content-center" onSubmit={handleFormSubmit}>
                    <input
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder={language === 'EN' ? "Search" : "Cari"}
                        aria-label="Search"
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                    <button
                        className="btn btn-primary my-2 my-sm-0 ms-2"
                        type="submit"
                    >
                        {language === 'EN' ? "Search" : "Cari"}
                    </button>
                </form>
                <div className="btn-group d-flex justify-content-center mt-3 mb-5" role="group" aria-label="Filter buttons">
                    {['attractions', 'hotels', 'restaurants'].map((filterType) => (
                        <button
                            key={filterType}
                            type="button"
                            className={`btn ${activeButton === filterType ? ' text-white' : 'bg-white border-black'}`}
                            onClick={() => handleFilterChange(filterType)}
                        >
                            {language === 'EN' ? filterType.charAt(0).toUpperCase() + filterType.slice(1).toLowerCase() :
                                filterType === 'attractions' ? "Wisata" :
                                    filterType === 'hotels' ? "Hotel" :
                                        filterType === 'restaurants' ? "Restoran" : null
                            }
                        </button>
                    ))}
                </div>
            </div>
            {loading ? ( // Render loading screen if loading is true
                <div className='mt-5 mb-5'>
                    <div className='mt-5 mb-5'></div>
                    <img src={loadingGif} />
                    <div className='mt-5 mb-5 min-vh-45'></div>
                </div>
            ) : (
                <div className="container">
                    <div className="cardBox row gx-5">
                        {places.data && places.data.length > 0 ? (
                            places.data.map((place, index) => (
                                place ? (
                                    <RecommendationItems key={index} place={place} />
                                ) : null
                            ))
                        ) : (
                            <p>Too many requests</p>
                        )}


                    </div>

                </div>
            )}
        </div>
    );
}

export default RecommendationPages;
