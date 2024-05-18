import background from '../img/cloudy-mountains-landscape.jpg'
import Recommendation from '../Components/Recommendation';
import Experience from '../Components/Experience';
import { useEffect, useState } from 'react';
const Main = ({ language }) => {
    console.log(language);

    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (

        <div>
            <div className="Gambar sumsel bg-fluid"
                style={{
                    backgroundImage: `url(${background})`,
                    height: '100vh',
                    width: 'auto',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',

                    overflow: 'hidden',
                    position: 'relative',

                }}>
                <div className={`bg-image text-center d-flex flex-column justify-content-center ${scrolled ? 'noOverlay' : 'overlay'}`} style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',

                }}>

                    <div className='ftext d-flex flex-column align-items-center text-center'>
                        <h1 className="STitle fw-bold">INDONESIA</h1>
                        <h1 className="Title fw-bold">SUMATRA SELATAN</h1>

                    </div>
                </div>

            </div>
            <Recommendation language={language} />

        </div>




    );

}

export default Main;