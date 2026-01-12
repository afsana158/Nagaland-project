import React from 'react'
import Layout from '../../components/Layout.jsx'
import './../../styles/AboutStyles.css'
import aboutHero from '../../assets/About/Overview/pic2.png'
import mapImage from '../../assets/About/Overview/map.png'
import r1 from '../../assets/About/Overview/r1.jpg'
import r2 from '../../assets/About/Overview/r2.jpg'
import r3 from '../../assets/About/Overview/r3.jpg'
import r4 from '../../assets/About/Overview/r4.jpg'
import r5 from '../../assets/About/Overview/r5.jpg'
import c1 from '../../assets/About/Overview/c1.jpg'
import c2 from '../../assets/About/Overview/c2.jpg'
import c3 from '../../assets/About/Overview/c3.jpg'
import a1 from '../../assets/About/Overview/a1.jpg'
import a2 from '../../assets/About/Overview/a2.jpg'
import b1 from '../../assets/About/Overview/b1.jpg'
import b2 from '../../assets/About/Overview/b2.jpg'
import d1 from '../../assets/About/Overview/d1.jpg'
import p1 from '../../assets/About/Overview/p1.jpg'
import p2 from '../../assets/About/Overview/p2.png'
import s1 from '../../assets/About/Overview/s1.jpg'
import s2 from '../../assets/About/Overview/s2.jpg'
import x1 from '../../assets/About/Overview/x1.jpg'
import x2 from '../../assets/About/Overview/x2.jpg'

function Overview() {
  return (
    <Layout>
     {/* HERO SECTION */}
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${aboutHero})` }}
      >
        <div className="about-hero-overlay"></div>

        <div className="about-hero-content">
          <h1>About Nagaland</h1>
          <p>Land of Festivals, Tribes & Timeless Traditions</p>
        </div>
      </section>

      {/* CONTENT BELOW */}
      <section className="about-content">
        <div className="about-content-inner">
        <p>
          The mountainous state of Nagaland is located on the eastern boundary of Northeast India bordering the Kingdom of Myanmar and remains home to the sixteen Naga tribes, each with a distinct culture, tribal traditions, and language. It is a land of festivals and folklore that have been passed down for generations. Nagaland has always attracted numerous visitors and curious anthropologists from around the world, who come to learn more about the tribal lifestyles of these once-headhunters. Nagaland hosts the popular Hornbill Festival every year in December, which is one of the biggest tourism events in the Indian subcontinent.
        </p>
        </div>
        {/* MAP IMAGE */}
    <div className="about-map">
      <img
        src={mapImage}
        alt="Illustrated Map of Nagaland"
      />
    </div>
        <div className="about-hero-content">
          <h1>Regions of Nagaland</h1>
          <p>Explore the diverse regions of Nagaland</p>
        </div>

       <section className="region-row">
            {/* LEFT CONTENT */}
            <div className="region-text">
                <h2 className="region-title">Kohima Region</h2>
                <p className="region-description">
                The cultural and administrative heart of Nagaland, known for its historic
                significance, scenic hills, and vibrant Angami heritage.
                </p>
            </div>

            {/* RIGHT CAROUSEL */}
            <div className="region-carousel">
                <div className="carousel-track">
                <div className="place-card">
                    <img src={r1} alt="War Cemetery" />
                    <div className="place-overlay">War Cemetery</div>
                </div>

                <div className="place-card">
                    <img src={r2} alt="Kisama Heritage Village" />
                    <div className="place-overlay">Kisama Heritage Village</div>
                </div>

               <div className="place-card">
                <img src={r3} alt="Dzukou Valley" />
                <div className="place-overlay">Dzukou Valley
                </div>
                </div>

                <div className="place-card">
                <img src={r4} alt="Khonama Green Village" />
                <div className="place-overlay">Khonoma Green Village
                </div>
                </div>

                <div className="place-card">
                <img src={r5} alt="Dzuleke Village" />
                <div className="place-overlay">Dzuleke Village
                </div>
                </div>
                </div>
            </div>
            </section>

            <section className="region-row">
            {/* LEFT CONTENT */}
            <div className="region-text">
                <h2 className="region-title">Dimapur Region</h2>
                <p className="region-description">
                The commercial hub and main entry point to the state, Dimapur is a fast-growing urban center that connects Nagaland to the rest of India. It is known for trade, transportation, and archaeological heritage.
                </p>
            </div>

            {/* RIGHT CAROUSEL */}
            <div className="region-carousel">
                <div className="carousel-track">
                <div className="place-card">
                    <img src={c1} alt="Kachari ruins" />
                    <div className="place-overlay">Kachari ruins</div>
                </div>

                <div className="place-card">
                    <img src={c2} alt="Bamboo resource center" />
                    <div className="place-overlay">Bamboo resource center</div>
                </div>

               <div className="place-card">
                <img src={c3} alt="Triple falls" />
                <div className="place-overlay">Triple falls
                </div>
                </div>
                </div>
            </div>
            </section>
            <section className="region-row">
            {/* LEFT CONTENT */}
            <div className="region-text">
                <h2 className="region-title">Mokokchung Region</h2>
                <p className="region-description">
                Known as the cultural soul of the Ao Naga tribe, Mokokchung is rich in folklore, traditional values, and missionary history. The region offers a peaceful blend of heritage villages and rolling hills.
                </p>
            </div>

            {/* RIGHT CAROUSEL */}
            <div className="region-carousel">
                <div className="carousel-track">
                <div className="place-card">
                    <img src={a1} alt="Longkhum village" />
                    <div className="place-overlay">Longkhum village</div>
                </div>

                <div className="place-card">
                    <img src={a2} alt="ungma village" />
                    <div className="place-overlay">ungma village</div>
                </div>
                </div>
            </div>
            </section>
            <section className="region-row">
            {/* LEFT CONTENT */}
            <div className="region-text">
                <h2 className="region-title">Mon Region</h2>
                <p className="region-description">
                Located in eastern Nagaland, Mon is home to the Konyak Naga tribe, known for their distinctive tattoos, warrior traditions, and wooden sculptures. This region offers one of the most authentic tribal experiences in India.
                </p>
            </div>

            {/* RIGHT CAROUSEL */}
            <div className="region-carousel">
                <div className="carousel-track">
                <div className="place-card">
                    <img src={b1} alt="Longwa village" />
                    <div className="place-overlay">Longwa village</div>
                </div>

                <div className="place-card">
                    <img src={b2} alt="ungma village" />
                    <div className="place-overlay">singphan sanctuary</div>
                </div>
                </div>
            </div>
            </section>
            <section className="region-row">
            {/* LEFT CONTENT */}
            <div className="region-text">
                <h2 className="region-title">Tuensang Region</h2>
                <p className="region-description">
                A remote and culturally rich region, Tuensang is inhabited by the Chang, Sangtam, and Yimkhiung tribes. It is known for untouched landscapes and deeply rooted customs.
                </p>
            </div>

            {/* RIGHT CAROUSEL */}
            <div className="region-carousel">
                <div className="carousel-track">
                <div className="place-card">
                    <img src={d1} alt="Tuensang village" />
                    <div className="place-overlay">Tuensang village</div>
                </div>
                </div>
                
            </div>
            </section>
            <section className="region-row">
            {/* LEFT CONTENT */}
            <div className="region-text">
                <h2 className="region-title">Wokha Region</h2>
                <p className="region-description">
                Dominated by the Lotha Naga tribe, Wokha is famous for its scenic beauty and agricultural richness. The region is especially popular during the spring flowering season.
                </p>
            </div>

            {/* RIGHT CAROUSEL */}
            <div className="region-carousel">
                <div className="carousel-track">
                <div className="place-card">
                    <img src={p1} alt="Doyang resevoir" />
                    <div className="place-overlay">Doyang resevoir</div>
                </div>
                
                
                <div className="place-card">
                    <img src={p2} alt="Mount tiyi" />
                    <div className="place-overlay">Mount tiyi</div>
                </div>  
                </div>  
            </div>
            </section>
            <section className="region-row">
            {/* LEFT CONTENT */}
            <div className="region-text">
                <h2 className="region-title">Phek Region</h2>
                <p className="region-description">
                A nature-lover’s paradise, Phek is home to the Chakhesang tribe and some of Nagaland’s most pristine natural attractions.
            </p>
            </div>

            {/* RIGHT CAROUSEL */}
            <div className="region-carousel">
                <div className="carousel-track">
                <div className="place-card">
                    <img src={s1} alt="Shilloi Lake" />
                    <div className="place-overlay">Shilloi Lake</div>
                </div>
                
                
                <div className="place-card">
                    <img src={s2} alt="Terrace farming" />
                    <div className="place-overlay">Terrace farming</div>
                </div>  
                </div>  
            </div>
            </section>
            <section className="region-row">
            {/* LEFT CONTENT */}
            <div className="region-text">
                <h2 className="region-title">Kiphire Region</h2>
                <p className="region-description">
                One of the least explored regions, Kiphire is known for rugged terrain and adventure tourism. It is home to Mount Saramati, the highest peak in Nagaland.
            </p></div>

            {/* RIGHT CAROUSEL */}
            <div className="region-carousel">
                <div className="carousel-track">
                <div className="place-card">
                    <img src={x1} alt="Mount Saramati" />
                    <div className="place-overlay">Mount Saramati</div>
                </div>
                
                
                <div className="place-card">
                    <img src={x2} alt="kiphire" />
                    <div className="place-overlay">kiphire</div>
                </div>  
                </div>  
            </div>
            </section>
      </section>


    </Layout>
  )
}

export default Overview