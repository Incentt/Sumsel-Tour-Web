import React from 'react';
import logo from '../logo.svg';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark bg-opacity-50 fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src={logo}
            width="120"
            height="40"
            className="d-inline-block align-top no-outline"
            alt="Logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav w-xl">
            <li className={`nav-item px-4`}>
              <Link className={`nav-link mr-3 text-white font-weight-bold ${location.pathname === '/' ? 'fw-bold' : 'fw-light'}`} to="/">Home</Link>
            </li>
            <li className={`nav-item px-4`}>
              <Link className={`nav-link text-white ${location.pathname === '/recommendation' ? 'fw-bold' : 'fw-light'}`} to="/recommendation">Recommendation</Link>
            </li>

            <li className={`nav-item px-4`}>
              <Link className={`nav-link text-white ${location.pathname === '/experience' ? 'fw-bold' : 'fw-light'}`} to="/experience">Experience</Link>
            </li>
            <li className={`nav-item px-4`}>
              <Link className={`nav-link text-white ${location.pathname === '/about' ? 'fw-bold' : 'fw-light'}`} to="/about">About Sumatra Selatan</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};


export default Header;