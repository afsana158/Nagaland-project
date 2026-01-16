import React, { useState } from "react";
import Layout from "./../../components/Layout.jsx";
import "./../../styles/ExploreStyles.css";
import aboutHero from "./../../assets/Explore/Destinations/hero.jpg";
import Weather from "./../../components/Weather.jsx";

/* VALLEYS & MOUNTAINS */
import r1 from "./../../assets/Explore/Destinations/r1.jpg";
import r2 from "./../../assets/Explore/Destinations/r2.jpg";
import r3 from "./../../assets/Explore/Destinations/r3.jpg";
import r4 from "./../../assets/Explore/Destinations/r4.jpg";
import r5 from "./../../assets/Explore/Destinations/r5.webp";
import r6 from "./../../assets/Explore/Destinations/r6.jpg";

/* LAKES & RIVERS */
import c1 from "./../../assets/Explore/Destinations/c1.jpg";
import c2 from "./../../assets/Explore/Destinations/c2.jpg";
import c3 from "./../../assets/Explore/Destinations/c3.avif";
import c4 from "./../../assets/Explore/Destinations/c4.jpg";
import c5 from "./../../assets/Explore/Destinations/c5.jpg";
import c6 from "./../../assets/Explore/Destinations/c6.jpg";

/* VILLAGES */
import a1 from "./../../assets/Explore/Destinations/a1.jpg";
import a2 from "./../../assets/Explore/Destinations/a2.avif";
import a3 from "./../../assets/Explore/Destinations/a3.jpg";
import a4 from "./../../assets/Explore/Destinations/a4.jpg";
import a6 from "./../../assets/Explore/Destinations/a6.avif";

/* MONUMENTS */
import b1 from "./../../assets/Explore/Destinations/b1.jpg";
import b2 from "./../../assets/Explore/Destinations/b2.jpg";
import b3 from "./../../assets/Explore/Destinations/b3.jpg";
import b4 from "./../../assets/Explore/Destinations/b4.jpg";

function Destinations() {
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
          <h1>Destinations</h1>
          <p>Explore the natural and cultural heart of Nagaland</p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="destinations-content">

        {/* ================= VALLEYS & MOUNTAINS ================= */}
        <div className="destination-category">
          <h2 className="category-title">Valleys & Mountains</h2>
          <div className="destination-grid">
            {[
              {
                img: r1,
                title: "Dzukou Valley",
                desc:
                  "Dzukou Valley is famed for its rolling green hills, seasonal wildflowers, and peaceful trekking routes. Located near Kohima, it is best visited between June and September.",
                weatherCity: "Kohima",
                info1: "Reach Kohima → travel to Viswema village (approx. 25 km) → trek 4–5 hours to the valley. Local taxis are available from Kohima.",
                info2: "Seasonal wildflowers (June–September), sunrise views from Mount Japfu, camping under the stars.",
              },
              {
                img: r2,
                title: "Japfu Peak",
                desc:
                  "Japfu Peak is the second-highest peak in Nagaland and offers panoramic views of surrounding ranges. It is home to the world’s tallest rhododendron tree.",
                weatherCity: "Kohima",
                info1: "Travel to Kohima → head to Viswema village (approx. 25 km) → trek 6–7 hours to the peak. Local guides can be hired in Viswema.",
                info2: "Rhododendron blooms (March–April), birdwatching, camping at the summit.",
              },
              {
                img: r3,
                title: "Mount Saramati",
                desc:
                  "The highest peak in Nagaland, Mount Saramati lies on the India–Myanmar border and is ideal for experienced trekkers and nature enthusiasts.",
                weatherCity: "Tuensang",
                info1:'Reach Tuensang → drive to Thanamir village → guided trek recommended due to remoteness.',
                info2: "Expansive views from the summit, diverse flora and fauna, sunrise and sunset vistas.",
              },
              {
                img: r4,
                title: "Mount Pauna",
                desc:
                  "A quiet and lesser-known hill peak surrounded by dense forests, offering serene views and peaceful hiking trails.",
                weatherCity: "Kohima",
                info1: "Travel to Kohima → head to nearby villages such as Jotsoma or Kigwema → trek to Mount Pauna.",
                info2: "Tranquil hiking experience, birdwatching, panoramic views of Kohima valley.",
              },
              {
                img: r5,
                title: "Tiyi Peak",
                desc:
                  "Tiyi Peak is culturally significant and surrounded by folklore. The trek rewards visitors with expansive views of central Nagaland.",
                weatherCity: "Zunheboto",
                info1: "Reach Zunheboto → travel to nearby villages such as Aghunato or Satakha → trek to Tiyi Peak.",
                info2: "Cultural insights from local tribes, scenic vistas, especially during sunrise and sunset.",
              },
              {
                img: r6,
                title: "Shilloi Peak",
                desc:
                  "A scenic mountain near Shilloi Lake, known for misty landscapes and tranquil surroundings.",
                weatherCity: "Tuensang",
                info1: "Travel to Tuensang → head to Shilloi village → trek to Shilloi Peak.",
                info2: "Misty mountain views, peaceful trekking experience, photography opportunities.",
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

        {/* ================= LAKES & WATER BODIES ================= */}
        <div className="destination-category">
          <h2 className="category-title">Lakes & Water Bodies</h2>
          <div className="destination-grid">
            {[
              {
                img: c1,
                title: "Shilloi Lake",
                desc:
                  "A sacred footprint-shaped lake surrounded by myths and forested hills. Best visited during spring and autumn.",
                weatherCity: "Tuensang",
                info1: "Reach Tuensang → travel to Shilloi village (approx. 18 km) by local transport or taxi.",
                info2: "Boat rides on the lake, picnics by the shore, photography of surrounding hills.",
              },
              {
                img: c2,
                title: "Triple Falls",
                desc:
                  "A cascading waterfall flowing through lush greenery, popular for short hikes and photography.",
                weatherCity: "Dimapur",
                info1: "Travel to Dimapur → head to Triple Falls (approx. 35 km) via local transport or taxi.",
                info2: "Short hikes to the falls, nature photography, enjoying the serene environment.",
              },
              {
                img: c3,
                title: "Dzükou Streams",
                desc:
                  "Crystal-clear streams flowing through Dzukou Valley, enhancing its scenic charm.",
                weatherCity: "Kohima",
                info1: "Reach Kohima → travel to Viswema village (approx. 25 km) → trek 4–5 hours to Dzukou Valley.", 
                info2: "Refreshing swims in the streams, nature walks, photography of the pristine waters.",
              },
              {
                img: c4,
                title: "Doyang River",
                desc:
                  "Famous for hosting thousands of migratory Amur falcons every winter.",
                weatherCity: "Wokha",
                info1: "Travel to Wokha → head to Doyang River (approx. 30 km) via local transport or taxi.",
                info2: "Birdwatching during Amur falcon migration (October–November), riverside picnics, photography.",
              },
              {
                img: c5,
                title: "Tizu River",
                desc:
                  "A major river of eastern Nagaland supporting agriculture and local ecosystems.",
                weatherCity: "Zunheboto",
              info1: "Reach Zunheboto → travel to Tizu River (approx. 20 km) via local transport or taxi.",
                info2: "Riverside walks, observing local fishing practices, photography of river landscapes.",
              },
              {
                img: c6,
                title: "Chathe River",
                desc:
                  "A calm river winding through forested landscapes and rural settlements.",
                weatherCity: "Mon",
                info1: "Travel to Mon → head to Chathe River (approx. 15 km) via local transport or taxi.",
                info2: "Peaceful riverside strolls, observing local life, photography of serene river views.",
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

        {/* ================= VILLAGES ================= */}
        <div className="destination-category">
          <h2 className="category-title">Villages & Tribal Settlements</h2>
          <div className="destination-grid">
            {[
              {
                img: a1,
                title: "Khonoma Village",
                desc:
                  "Asia’s first green village, known for sustainable practices and Angami culture.",
                weatherCity: "Kohima",
                info1: "Reach Kohima → travel to Khonoma village (approx. 20 km) by local transport or taxi.",
                info2: "Guided village tours, nature walks in surrounding forests, experiencing local festivals if timed right.",
              },
              {
                img: a2,
                title: "Longwa Village",
                desc:
                  "A unique village located on the India–Myanmar border, home to the Konyak tribe.",
                weatherCity: "Mon",
                info1: "Travel to Mon → head to Longwa village (approx. 60 km) via local transport or taxi.",
                info2: "Cultural tours of the village, learning about Konyak traditions, exploring the border area.",
              },
              {
                img: a3,
                title: "Dzuleke Village",
                desc:
                  "An eco-tourism village offering homestays, birdwatching, and forest trails.",
                weatherCity: "Kohima",
              info1: "Reach Kohima → travel to Dzuleke village (approx. 40 km) by local transport or taxi.",
                info2: "Birdwatching excursions, guided forest walks, experiencing local Naga culture through homestays.",
              },
              {
                img: a4,
                title: "Pfutsero",
                desc:
                  "The highest town in Nagaland, known for cool climate and scenic views.",
                weatherCity: "Phek",
              info1: "Travel to Phek → head to Pfutsero (approx. 25 km) via local transport or taxi.",
                info2: "Exploring local markets, enjoying panoramic views, visiting nearby villages.",
              },
              {
                img: a6,
                title: "Mopungchuket",
                desc:
                  "A heritage Ao village preserving folklore, traditions, and traditional houses.",
                weatherCity: "Mokokchung",
                info1: "Reach Mokokchung → travel to Mopungchuket village (approx. 15 km) by local transport or taxi.",
                info2: "Heritage walks, visiting traditional Ao houses, experiencing local festivals if timed right.",
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

        {/* ================= MONUMENTS ================= */}
        <div className="destination-category">
          <h2 className="category-title">Monuments & Memorials</h2>
          <div className="destination-grid">
            {[
              {
                img: b3,
                title: "State Museum Kohima",
                desc:
                  "A museum showcasing the cultural heritage of Nagaland’s tribes.",
                weatherCity: "Kohima",
                info1: "Reach Kohima → head to State Museum located in the heart of the city.",
                info2: "Exploring tribal artifacts, learning about Naga history and culture, photography of exhibits.",
              },
              {
                img: b2,
                title: "Kohima War Cemetery",
                desc:
                  "A World War II memorial honoring soldiers who fought in the Battle of Kohima.",
                weatherCity: "Kohima",
                info1: "Reach Kohima → head to Kohima War Cemetery located on the outskirts of the city.",
                info2: "Paying respects at the memorial, learning about WWII history in Nagaland, photography of the serene cemetery grounds.",
              },
              {
                img: b1,
                title: "Catholic Cathedral Kohima",
                desc:
                  "A prominent church blending Naga architectural elements with modern design.",
                weatherCity: "Kohima",
                info1: "Reach Kohima → head to Catholic Cathedral located in the city center.",
                info2: "Admiring the unique architecture, attending a service if interested, photography of the cathedral exterior and interior.",
              },
              {
                img: b4,
                title: "Dimapur Kachari Ruins",
                desc:
                  "Ancient stone ruins representing early Kachari civilization.",
                weatherCity: "Dimapur",
                info1: "Travel to Dimapur → head to Kachari Ruins located on the outskirts of the city.",
                info2: "Exploring the ancient ruins, learning about Kachari history, photography of the stone structures.",
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
  );
}

export default Destinations;
