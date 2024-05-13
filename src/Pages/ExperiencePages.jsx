import React, { useState, useEffect } from 'react';
import ExperienceItems from '../Components/ExperienceItems';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import loadingGif from '../img/Loading.gif'

const ACCESS_KEY = process.env.REACT_APP_UNSPLASH_API_KEY;
const query = 'sumatra selatan indonesia';
const PER_PAGE = 9; // Adjust the number of photos per page

function Experience() {
    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();
    
    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const apiUrl = `https://api.unsplash.com/search/photos?page=${currentPage}&per_page=${PER_PAGE}&query=${query}&client_id=${ACCESS_KEY}`;
                const response = await fetch(apiUrl);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setPlaces(prevPlaces => [...prevPlaces, ...data.results]);
                console.log(data.results);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching photos:', error);
                setLoading(false);
            }
        };

        fetchPhotos();
    }, [currentPage]);

    const loadNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const goToExperience = () => {
        navigate('/experience');
    };

    return (
        <div className="mt-5 p-5 d-flex flex-column align-items-center justify-content-center">
            <h1 className="mb-5">Sumatra Selatan Experience</h1>
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
                            <ExperienceItems key={index} experience={place} />
                        ))}
                        <div className='mt-3 d-flex justify-content-center'>
                            <button type="button" onClick={loadNextPage} className="loadmore btn text-white fw-bold rounded-pill border-none">Load More</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Experience;
