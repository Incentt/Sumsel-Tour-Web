import background from '../img/cloudy-mountains-landscape.jpg'
import Recommendation from '../Components/Recommendation';
import Experience from '../Components/Experience';
function About() {

    return (

        <div>
            <div
                className="Gambar sumsel bg-fluid"
                style={{
                    height: '100vh',
                    width: '100%',
                    overflow: 'hidden',
                    position: 'relative',
                }}
            >
                <video
                    autoPlay
                    muted
                    loop
                    style={{
                        height: '100%',
                        width: '100%',
                        objectFit: 'cover',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                    }}
                >
                    <source
                        src="https://sumselprov.go.id/assets/images/Selamat%20Datang%20di%20Sumatera%20Selatan.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support HTML5 video.
                </video>


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
                        <h1 className="text-white text-capital fw-bold">Sumatra Selatan</h1>
                        <h3 className="text-white">Tentang Sumatra Selatan</h3>
                    </div>
                </div>

            </div>
            <div className='about'>
                <h1>
                    Sejarah Sumatera Selatan
                </h1>
                <br></br>
                <p>
                    Sumatera Selatan atau pulau Sumatera bagian selatan yang dikenal sebagai provinsi Sumatera Selatan didirikan pada tanggal 12 September 1950 yang awalnya mencakup daerah Jambi, Bengkulu, Lampung, dan kepulauan Bangka Belitung dan keempat wilayah yang terakhir disebutkan kemudian masing-masing menjadi wilayah provinsi tersendiri akan tetapi memiliki akar budaya bahasa dari keluarga yang sama yakni bahasa Austronesia proto bahasa Melayu dengan pembagian daerah bahasa dan logat antara lain seperti Palembang, Ogan, Komering, Musi, Lematang dan masih banyak bahasa lainnya.

                </p>
                <br></br>
                <p>
                    Menurut sumber antropologi disebutkan bahwa asal usul manusia Sumatera bagian selatan dapat ditelusuri mulai dari zaman paleolitikum dengan adanya benda-benda zaman paleolitikum pada beberapa wilayah antara lain sekarang dikenal sebagai Kabupaten Lahat, Kabupaten Sarolangun Bangko, Kabupaten Ogan Komering Ulu dan Tanjung Karang yakni desa Bengamas lereng utara pergunungan Gumai, di dasar (cabang dari Sungai Musi) sungai Saling, sungai Kikim lalu di desa Tiangko Panjang (Gua Tiangko Panjang) dan desa Padang Bidu atau daerah Podok Salabe serta penemuan di Kalianda dan Kedaton dimana dapat ditemui tradisi yang berasal dari acheulean yang bermigrasi melalui sungai Mekong yang merupakan bagian dari bangsa Monk Khmer.

                </p>
                <br></br>
                <p>
                    Provinsi Sumatera Selatan sejak berabad yang lalu dikenal juga dengan sebutan Bumi Sriwijaya; pada abad ke-7 hingga abad ke-12 Masehi wilayah ini merupakan pusat kerajaan Sriwijaya yang juga terkenal dengan kerajaan maritim terbesar dan terkuat di Nusantara. Gaung dan pengaruhnya bahkan sampai ke Madagaskar di Benua Afrika.


                    Sejak abad ke-13 sampai abad ke-14, wilayah ini berada di bawah kekuasaan Majapahit. Selanjutnya wilayah ini pernah menjadi daerah tak bertuan dan bersarangnya bajak laut dari Mancanegara terutama dari negeri China.
                </p>
                <br></br>
                <a href='https://sumselprov.go.id' target='blank'>
                    https://sumselprov.go.id
                </a>
            </div>
        </div>




    );

}

export default About;