import logo from '../logo.svg';
function Footer() {
    return (
        <div clas="container my-5">
            <footer className="text-center text-white"
                style={{ backgroundcolor: '#3f51b5' }}>
                <div className="container">
                 
                    <hr className="my-5" />
                    <section className="mb-3">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-8">
                         
                                    <img src={logo} className="fLogo img-fluid bg-transparent no-outline mb-3" alt="..." />
                       

                                <p>
                                    Eksplorasi Keindahan Alam, Budaya, dan Petualangan yang Tak Terlupakan!

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