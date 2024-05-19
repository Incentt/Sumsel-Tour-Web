
const About = ({ language }) => {

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
                    </div>
                </div>
            </div>
            <div className='about'>
                <h1>
                    {language === 'EN' ? 'History Of Sumatra Selatan' : 'Sejarah Sumatera Selatan'}
                </h1>
                <br></br>
                <p>
                    {language === 'EN' ? `South Sumatra or the southern part of the island of Sumatra, known as the province of South Sumatra, was established on September 12 1950, which initially included the areas of Jambi, Bengkulu, Lampung and the Bangka Belitung islands and the last four regions mentioned later each became a separate provincial region but had The cultural roots of languages ​​from the same family are the Austronesian proto-Malay language with regional divisions of languages ​​and accents, including Palembang, Ogan, Komering, Musi, Lematang and many other languages.` : `                    Sumatera Selatan atau pulau Sumatera bagian selatan yang dikenal sebagai provinsi Sumatera Selatan didirikan pada tanggal 12 September 1950 yang awalnya mencakup daerah Jambi, Bengkulu, Lampung, dan kepulauan Bangka Belitung dan keempat wilayah yang terakhir disebutkan kemudian masing-masing menjadi wilayah provinsi tersendiri akan tetapi memiliki akar budaya bahasa dari keluarga yang sama yakni bahasa Austronesia proto bahasa Melayu dengan pembagian daerah bahasa dan logat antara lain seperti Palembang, Ogan, Komering, Musi, Lematang dan masih banyak bahasa lainnya.`}
                </p>
                <br></br>
                <p>
                    {language === 'EN' ? `According to anthropological sources, it is stated that the origins of humans in southern Sumatra can be traced back to the paleolithic era with the presence of paleolithic era objects in several areas, including now known as Lahat Regency, Sarolangun Bangko Regency, Ogan Komering Ulu Regency and Tanjung Karang, namely Bengamas slope village. north of the Gumai mountains, at the base (branch of the Musi River) of the Saling river, the Kikim river and then in the village of Tiangko Panjang (Tiangko Panjang Cave) and the village of Padang Bidu or Podok Salabe area as well as discoveries in Kalianda and Kedaton where you can find traditions originating from the Acheulean migrated via the Mekong river which was part of the Khmer Monk nation.` : `                    Menurut sumber antropologi disebutkan bahwa asal usul manusia Sumatera bagian selatan dapat ditelusuri mulai dari zaman paleolitikum dengan adanya benda-benda zaman paleolitikum pada beberapa wilayah antara lain sekarang dikenal sebagai Kabupaten Lahat, Kabupaten Sarolangun Bangko, Kabupaten Ogan Komering Ulu dan Tanjung Karang yakni desa Bengamas lereng utara pergunungan Gumai, di dasar (cabang dari Sungai Musi) sungai Saling, sungai Kikim lalu di desa Tiangko Panjang (Gua Tiangko Panjang) dan desa Padang Bidu atau daerah Podok Salabe serta penemuan di Kalianda dan Kedaton dimana dapat ditemui tradisi yang berasal dari acheulean yang bermigrasi melalui sungai Mekong yang merupakan bagian dari bangsa Monk Khmer.`}
                </p>
                <br></br>
                <p>
                    {language === 'EN' ? `Since centuries ago, the province of South Sumatra has also been known as Bumi Sriwijaya; In the 7th century to the 12th century AD, this region was the center of the Srivijaya kingdom, which was also famous for being the largest and strongest maritime kingdom in the archipelago. Its echoes and influence even reached Madagascar on the African continent.
                    From the 13th to the 14th century, this region was under Majapahit rule. Furthermore, this area was once a no man's land and was home to pirates from abroad, especially from China.`: ` Provinsi Sumatera Selatan sejak berabad yang lalu dikenal juga dengan sebutan Bumi Sriwijaya; pada abad ke-7 hingga abad ke-12 Masehi wilayah ini merupakan pusat kerajaan Sriwijaya yang juga terkenal dengan kerajaan maritim terbesar dan terkuat di Nusantara. Gaung dan pengaruhnya bahkan sampai ke Madagaskar di Benua Afrika.
                    Sejak abad ke-13 sampai abad ke-14, wilayah ini berada di bawah kekuasaan Majapahit. Selanjutnya wilayah ini pernah menjadi daerah tak bertuan dan bersarangnya bajak laut dari Mancanegara terutama dari negeri China.`}
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