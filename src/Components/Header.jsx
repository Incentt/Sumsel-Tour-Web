import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../logo.svg';
import gear from '../img/Gear.gif'
import { faL } from '@fortawesome/free-solid-svg-icons';

const ACCESS_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const Header = ({ language, toggleLanguage }) => {
  const navLinksEN = [
    { to: '/', text: 'Home' },
    { to: '/recommendation', text: 'Recommendation' },
    { to: '/experience', text: 'Experience' },
    { to: '/about', text: 'About' }
];

const navLinksID = [
    { to: '/', text: 'Beranda' },
    { to: '/recommendation', text: 'Rekomendasi' },
    { to: '/experience', text: 'Pengalaman' },
    { to: '/about', text: 'Tentang' }
];

const navLinks = language === 'EN' ? navLinksEN : navLinksID;

  const [scrolled, setScrolled] = useState(false);
  const [weather, setWeather] = useState(null);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true); // Add state for navbar collapse
  const [isWeather, setWeatherType] = useState("Palembang"); // Add state for weather visibility
  const [isDropdownOpen, setDropdownOpen] = useState(false); // Add state for dropdown visibility
  const [isLoading, setLoading] = useState(false);


 

  const checkPath = () =>{
    const path = window.location.pathname;

    if(path == "/"){
      return false;
    }else
    return true;
    
  }
  const currentPath = checkPath();

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    checkPath();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleWeatherChange = (city) => {
    setWeatherType(city);
    setDropdownOpen(false); // Close dropdown after selecting a city
    setLoading(true);
  };

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${ACCESS_KEY}&q=${isWeather}&aqi=no`);
        if (!response.ok) throw new Error('Failed to fetch weather data');

        const data = await response.json();
        setWeather(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();
  }, [isWeather]);

  const navLinkClass = (path) => `nav-link text-white ${location.pathname === path ? 'fw-bold' : 'fw-light'}`;

  return (
    <div className={`navbarTop d-flex flex-row w-100 fixed-top p-2 ps-3 pe-3 ${currentPath ? 'scrolled' : ''} ${scrolled ? 'scrolled' : ''} justify-content-between`}>
      <nav className={`navSec navbar navbar-dark navbar-expand-lg `}>
        <div className='container'>
          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={() => setIsNavCollapsed(!isNavCollapsed)} // Toggle navbar collapse state
            aria-controls="navbarNav"
            aria-expanded={!isNavCollapsed} // Use state to control aria-expanded
            aria-label="Toggle navigation"

          >
            <span className="navbar-toggler-icon border-0"></span>
          </button>

          <div className={`navbar-collapse ${isNavCollapsed ? 'collapse' : ''}`} id="navbarNav">
            <ul className={`navsec navbar-nav w-md ${isNavCollapsed ? '' : 'mt-3'} `}>

              {navLinks.map((link, index) => (
                <li key={index} className="nav-item d-flex align-items-center px-2">
                  <Link className={navLinkClass(link.to)} to={link.to}>{link.text}</Link>
                </li>
              ))}

            </ul>
          </div>
        </div>
      </nav>
      <a className={`navbar-brand m-0 d-flex align-items-center ${isNavCollapsed ? '' : 'd-none'} `} href="/">
        <img src={logo} width="120" height="40" className="d-inline-block align-top no-outline" alt="Logo" />
      </a>


      {weather && (

        <div className={`navSec ${isNavCollapsed ? 'd-md-flex collapse' : 'd-none'}   align-items-center justify-content-end navbar-expand-lg`}>
          <div className="dropdown ">
            {isWeather && ( // Conditionally render weather-related elements if isWeather is true
              <button
                className="me-2 btn border text-white rounded-pill bg-dark d-inline-flex align-items-center px-3 py-1 "
                type="button"
                id="dropdownMenuButton"
                aria-haspopup="true"
                aria-expanded={isDropdownOpen} // Set aria-expanded to manage accessibility
                onClick={toggleDropdown} // Call toggleDropdown when button is clicked
              >
                {isLoading ? (
                  <div className="d-flex align-items-center">
                    <img src={gear} style={{ width: '25px', height: 'auto' }} alt="Loading Gear" />
                    <span className="ms-2">Loading</span>
                  </div>
                ) : (
                  <>
                    <p className='align-middle m-0'>
                      {weather.location.name}
                    </p>
                    <img
                      style={{ marginLeft: '8px', marginRight: '3px', width: '30px', height: 'auto' }}
                      src={weather.current.condition.icon}
                      alt="Weather icon"
                    />
                    <p className='align-middle m-0'>
                      {weather.current.temp_c}°C
                    </p>

                    {isDropdownOpen ? (
                      <svg className='ms-2' xmlns="http://www.w3.org/2000/svg" width="20px" viewBox="0 0 512 512">
                        <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" fill="white" />
                      </svg>
                    ) : (
                      <svg className='ms-2' width="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" fill="white" />
                      </svg>
                    )}
                  </>
                )}
              </button>
            )}
            {/* Render dropdown menu only if isDropdownOpen is true */}
            {isDropdownOpen && (
              <div className="dropdown-menu d-flex flex-column" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#" onClick={() => handleWeatherChange("Palembang")}>Palembang</a>
                <a className="dropdown-item" href="#" onClick={() => handleWeatherChange("Prabumulih")}>Prabumulih</a>
                <a className="dropdown-item" href="#" onClick={() => handleWeatherChange("Lubuklinggau")}>Lubuklinggau</a>
                <a className="dropdown-item" href="#" onClick={() => handleWeatherChange("Baturaja")}>Baturaja</a>
                <a className="dropdown-item" href="#" onClick={() => handleWeatherChange("Lahat")}>Lahat</a>
                <a className="dropdown-item" href="#" onClick={() => handleWeatherChange("Pagar Alam")}>Pagar Alam</a>
                <a className="dropdown-item" href="#" onClick={() => handleWeatherChange("Martapura")}>Martapura</a>
                <a className="dropdown-item" href="#" onClick={() => handleWeatherChange("Muara Enim")}>Muara Enim</a>
                <a className="dropdown-item" href="#" onClick={() => handleWeatherChange("Indralaya")}>Indralaya</a>
                <a className="dropdown-item" href="#" onClick={() => handleWeatherChange("Kayu Agung")}>Kayu Agung</a>
              </div>
            )}
            <button className="btn border text-white rounded-pill bg-dark d-inline-flex align-items-center px-3 py-1" onClick={toggleLanguage}>
              {language === 'EN' ? (
                <div className=' d-none d-md-flex'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 30" width="30px" height="30px" >
                    <clipPath id="t">
                      <path d="M25,15h25v15zv15h-25zh-25v-15zv-15h25z" />
                    </clipPath>
                    <path d="M0,0v30h50v-30z" fill="#012169" />
                    <path d="M0,0 50,30M50,0 0,30" stroke="#fff" strokeWidth="6" />
                    <path d="M0,0 50,30M50,0 0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4" />
                    <path d="M-1 11h22v-12h8v12h22v8h-22v12h-8v-12h-22z" fill="#C8102E" stroke="#FFF" strokeWidth="2" />

                  </svg>
                  <p className='m-1 mb-0'>EN </p>
                </div>

              ) : (
                <div className='d-flex'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px">
                    <rect fill="#FF0000" width="30px" height="10px" y="5px" />
                    <rect fill="#FFFFFF" width="30px" height="10px" y="15px" />
                  </svg>
                  <p className='m-1 mb-0'>ID </p>
                </div>
              )}
            </button>
          </div>

          <li className="nav-item d-flex align-items-center">
            <span className="nav-link text-white d-flex align-items-center">
              <p className={`align-middle m-0 px-2 d-none d-xl-block`}>
                {weather.location.localtime}
              </p>
            </span>
          </li>
        </div>
      )
      }
    </div >
  );
};

export default Header;
