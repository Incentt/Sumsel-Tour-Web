import background from '../img/cloudy-mountains-landscape.jpg'
function Main() {

    return (


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
            <div className='bg-image text-center d-flex flex-column justify-content-center' style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundColor: 'rgba(0, 0, 0, 0.3)', // Dark overlay
            }}>

                <div className='ftext d-flex flex-column align-items-start text-start'>
                    <h1 className="text-white text-capital fw-bold">Selamat datang di Portal Wisata Sumatra Selatan</h1>
                    <h3 className="text-white">Eksplorasi Keindahan Alam, Budaya, dan Petualangan yang Tak Terlupakan!</h3>
                </div>
            </div>

        </div>



    );

}

export default Main;