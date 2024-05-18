import logo from '../logo.svg';
const Footer = ({ language }) => {
    const Judul = language === 'EN' ? 'Explore Natural Beauty, Culture and Unforgettable Adventures!' : 'Eksplorasi Keindahan Alam, Budaya, dan Petualangan yang Tak Terlupakan!';

    return (
        <div clas="container p-5">
            <footer className=" footer text-center text-white"
                style={{ backgroundcolor: '#3f51b5' }}>
                <div className="container">
                 
        
                    <section className="p-5">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-8">
                         
                                    <img src={logo} className="fLogo img-fluid bg-transparent no-outline mb-3" alt="..." />
                       

                                <p>
                                    {Judul}

                                </p>
                            </div>
                        </div>
                    </section>
                    
                </div>
                <div
                    className="text-center p-3"
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    }}
                >
                    © 2024 Copyright
                </div>

            </footer>

        </div>
    );
}
export default Footer;