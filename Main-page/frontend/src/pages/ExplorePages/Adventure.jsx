import React,{useState} from 'react'
import Layout from './../../components/Layout.jsx'
import './../../styles/ExploreStyles.css'
import aboutHero from './../../assets/Explore/Adventure/hero.webp'
import Weather from "./../../components/Weather.jsx";

import c1 from './../../assets/Explore/Adventure/c1.jpg'
import c2 from './../../assets/Explore/Adventure/c2.jpg'
import c3 from './../../assets/Explore/Adventure/c3.jpg'
import c4 from './../../assets/Explore/Adventure/c4.jpg'

import r1 from './../../assets/Explore/Adventure/r1.jpg'
import r2 from './../../assets/Explore/Adventure/r2.jpg'
import r3 from './../../assets/Explore/Adventure/r3.jpg'
import r4 from './../../assets/Explore/Adventure/r4.jpg'
function Adventure() {
  const [activeDestination, setActiveDestination] = useState(null);
  
    const openSidebar = (data) => setActiveDestination(data);
    const closeSidebar = () => setActiveDestination(null);
  
  return (
    <Layout>
    {/* HERO */}
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${aboutHero})` }}
      >
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <h1>Adventures</h1>
          <p>Explore the natural and cultural heart of Nagaland</p>
        </div>
      </section>
      <section className="destinations-content">

        {/* ================= trekking ================= */}
        <div className="destination-category">
          <h2 className="category-title">Trekking</h2>
          <div className="destination-grid">
            {[
              {
                img: r1,
                title: "Dzukou Valley Trek",
                desc:
                  "Dzukou Valley is famed for its rolling green hills, seasonal wildflowers, and peaceful trekking routes. Located near Kohima, it is best visited between June and September.",
                weatherCity: "Kohima",
                info1: "Reach Kohima → travel to Viswema village (approx. 25 km) → trek 4–5 hours to the valley. Local taxis are available from Kohima.",
                info2: "Duration-24 hrs ,Difficulty-Moderte ,Best-time-June to September, Highlights-Seasonal wildflowers, panoramic views, camping under the stars.",
              },
              {
                img: r2,
                title: "Mount japfu trek",
                desc:
                  "Japfu Peak is the second-highest peak in Nagaland and offers panoramic views of surrounding ranges. It is home to the world’s tallest rhododendron tree.",
                weatherCity: "Kohima",
                info1: "Travel to Kohima → head to Viswema village (approx. 25 km) → trek 6–7 hours to the peak. Local guides can be hired in Viswema.",
                info2: "Duration-10 hrs ,Difficulty-Moderte ,Best-time-March to April, Highlights-Rhododendron blooms, birdwatching, camping at the summit.",
              },
              {
                img: r3,
                title: "Pulie Badze Trail ",
                desc:
                  "Forest trail inside wildlife sanctuary",
                weatherCity: "Kohima",
                info1:' Travel to Kohima → head to nearby villages such as Jotsoma or Kigwema → trek to Pulie Badze (approx. 4 km) via local transport or taxi.',
                info2: "Duration-1 day ,Difficulty-Easy ,Best-time-All year round, Highlights-Natural beauty, birdwatching, sunrise and sunset vistas.",
              },
              {
                img: r4,
                title: "Saramati Peak trek",
                desc:
                  "Highest peak in Nagaland offering panoramic views of the surrounding hills and valleys. It is located in the Phek district and is best visited between October and April.",
                weatherCity: "Kiphire",
                info1: "Travel to Kiphire → head to Thanamir village (approx. 20 km) → trek 8–10 hours to the peak. Local guides can be hired in Thanamir.",
                info2: "Duration-2 days ,Difficulty-Hard ,Best-time-October to April, Highlights-Panoramic views, diverse flora and fauna, camping at the summit.",
              },
              
            ].map((item, i) => (
              <div key={i} className="destination-card" onClick={() => openSidebar(item)}>
                <img src={item.img} alt={item.title} />
                <div className="destination-overlay">
                  <h3>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= wildlife sanctuary ================= */}
        <div className="destination-category">
          <h2 className="category-title">Wildlife Sanctuary</h2>
          <div className="destination-grid">
            {[
              {
                img: c1,
                title: "Fakim Wildlife Sanctuary",
                desc:
                  "Fakim Wildlife Sanctuary is one of the most scenic protected areas in Nagaland, located in the high hills of the Indo-Burma biodiversity hotspot.",
                weatherCity: "Kiphire",
                info1: "Location: Kiphire District, near the India–Myanmar border ,Area: ~6.42 sq km ,Best time to visit: October – April",
                info2: "Key attractions: Rich biodiversity including rare orchids, rhododendrons, and wildlife such as barking deer, wild boar, and various bird species. Trekking trails through pristine forests offer opportunities for nature walks and birdwatching.",
              },
              {
                img: c2,
                title: "Puliebadze Wildlife Sanctuary",
                desc:
                  "Puliebadze Wildlife Sanctuary lies near Kohima city and is known for its scenic hill landscapes and rich bird diversity.",
                weatherCity: "Kohima",
                info1: "Location: Kohima District ,Area: ~9.23 sq km ,Best time to visit: September – April",
                info2: "Key attractions: The sanctuary is home to a variety of bird species, including the rare Blyth’s tragopan and Mrs. Hume’s pheasant. Nature trails through the sanctuary offer opportunities for birdwatching, nature walks, and enjoying panoramic views of the surrounding hills.",
              },
              {
                img: c3,
                title: "Rangapahar Wildlife Sanctuary",
                desc:
                  "Rangapahar Wildlife Sanctuary is located near Dimapur and is one of the most accessible protected forests in Nagaland.",
                weatherCity: "dimapur",
                info1: "Location: Dimapur District ,Area: ~4.7 sq km ,Best time to visit: October – March", 
                info2: "Key attractions: The sanctuary is home to a variety of flora and fauna, including several species of birds, butterflies, and small mammals. Nature trails through the sanctuary offer opportunities for birdwatching, nature walks, and enjoying the tranquility of the forest environment.",
              },
              {
                img: c4,
                title: "Ntangki (Intanki) National Park",
                desc:
                  "Ntangki National Park is the largest protected wildlife area in Nagaland",
                weatherCity: "Peren",
                info1: "Location: Peren District ,Area: ~200 sq km ,Established: 1993",
                info2: "Key attractions: The park is home to a variety of wildlife, including elephants, tigers, leopards, and several species of birds. Nature trails through the park offer opportunities for wildlife spotting, nature walks, and experiencing the rich biodiversity of Nagaland.",
              },
             
            ].map((item, i) => (
              <div key={i} className="destination-card" onClick={() => openSidebar(item)}>
                <img src={item.img} alt={item.title} />
                <div className="destination-overlay">
                  <h3>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>



      </section>

      {/* ================= SIDEBAR ================= */}
      <div className={`destination-sidebar ${activeDestination ? "active" : ""}`}>
        {activeDestination && (
          <>
            <button className="sidebar-close" onClick={closeSidebar}>✕</button>
            <img src={activeDestination.img} alt={activeDestination.title} className="sidebar-image" />
            <div className="sidebar-content">
              <h2>{activeDestination.title}</h2>
              <p>{activeDestination.desc}</p>
              <Weather city={activeDestination.weatherCity} />
              <h2>How to Get There</h2>
              <p>{activeDestination.info1}</p>
              <h2>Don't miss!!</h2>
              <p>{activeDestination.info2}</p>
            </div>
          </>
        )}
      </div>

      {activeDestination && (
        <div className="sidebar-overlay" onClick={closeSidebar}></div>
      )}
    </Layout>
  )
}

export default Adventure