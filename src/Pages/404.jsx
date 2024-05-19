// Pages/404.js
import React from 'react';

const PageNotFound = ({ language }) => {
    return (
        <div style={{ textAlign: 'center', marginTop: '20vw', marginBottom: '20vw' }}>
            <h1>404</h1>
            <p>{language === 'EN' ? 'Page Not Found' : 'Halaman Tidak Ditemukan'}</p>
            <a href="/">{language === 'EN' ? 'Back to Home' : 'Kembali ke Beranda'}</a>
        </div>
    );
};

export default PageNotFound;
