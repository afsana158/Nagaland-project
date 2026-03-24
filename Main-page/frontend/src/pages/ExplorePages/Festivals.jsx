import React ,{useState} from 'react'
import Layout from './../../components/Layout.jsx'
import './../../styles/ExploreStyles.css' 
import aboutHero from './../../assets/Explore/Festivals/hero.jpg'
import a1 from './../../assets/Explore/Festivals/a1.jpg'
import b1 from './../../assets/Explore/Festivals/b1.webp'
import b2 from './../../assets/Explore/Festivals/b2.jpg'
import b3 from './../../assets/Explore/Festivals/b3.jpg'
import c1 from './../../assets/Explore/Festivals/c1.png'
import c2 from './../../assets/Explore/Festivals/c2.jpg'
function Festivals() {
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
              <div className="destination-category">
                <h2 className="category-title">Flagship Events</h2>
      
                <div className="destination-grid">
                  {[
                    {
                      img: a1,
                      title: "Hornbill Festival",
                      desc: "Nagaland’s most iconic festival. Celebrated annually in December, it showcases the rich cultural heritage of the Naga tribes.",
                      info1:
                        "1-10 December ,Place-Kisama Heritage Village, near Kohima",
                      info2:
                        "Traditional warrior dances ,Naga food festival ,Night rock concerts ,Tribal morung displays",
                    }
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="destination-card"
                      onClick={() => openSidebar(item)}
                    >
                      <img src={item.img} alt={item.title} />
      
                      <div className="destination-overlay">
                        <h3>{item.title}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            
      
            {/* LOCAL LIFESTYLE */}
            <div className="destination-category">
              <h2 className="category-title">Tribal Festivals</h2>
      
              <div className="destination-grid">
                {[
                  {
                    img: b1,
                    title: "Moatsu Festival (Ao Tribe)",
                    desc: "Celebrated after sowing season. A time for feasting, singing, and community bonding.",
                    info1: "Held in Early May, Location: Ao villages in Mokokchung district",
                    info2: "Sangpangtu (traditional fire gathering ceremony)",
                  },
                  {
                    img: b2,
                    title: "Aoling Festival (Konyak Tribe)",
                    desc: "Celebrates the arrival of spring and the new year.",
                    info1: "Held in April, Location: Mon district",
                    info2:
                      "Tattooed Konyak elders in full traditional attire.",
                  },
                  {
                    img: b3,
                    title: "Sekrenyi Festival (Angami Tribe)",
                    desc: "A purification festival for spiritual and social renewal.",
                    info1: "Held in February, Location: Angami villages around Kohima",
                    info2:
                      "Ritual bathing in sacred rivers, traditional dances and songs.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="destination-card"
                    onClick={() => openSidebar(item)}
                  >
                    <img src={item.img} alt={item.title} />
      
                    <div className="destination-overlay">
                      <h3>{item.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="destination-category">
              <h2 className="category-title">Agricultural Festivals</h2>
      
              <div className="destination-grid">
                {[
                  {
                    img: c1,
                    title: "Tuluni Festival (Sumi Tribe)",
                    desc: "Mid-year harvest festival celebrating abundance and prosperity.",
                    info1: "Held in August, Location: Sumi villages in Zunheboto district",
                    info2: "Community feasts and rice beer rituals.",
                  },
                  {
                    img: c2,
                    title: "Tokhu Emong (Lotha Tribe)",
                    desc: "Harvest festival emphasizing forgiveness and friendship.",
                    info1: "Held in August, Location: Lotha villages in Wokha district",
                    info2:
                      "Forgiveness rituals, traditional dances, and communal feasting.",
                  },
                  
                ].map((item, i) => (
                  <div
                    key={i}
                    className="destination-card"
                    onClick={() => openSidebar(item)}
                  >
                    <img src={item.img} alt={item.title} />
      
                    <div className="destination-overlay">
                      <h3>{item.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            </section>
      
            {/* SIDEBAR */}
            <div
              className={`destination-sidebar ${
                activeDestination ? "active" : ""
              }`}
            >
              {activeDestination && (
                <>
                  <button className="sidebar-close" onClick={closeSidebar}>
                    ✕
                  </button>
      
                  <img
                    src={activeDestination.img}
                    alt={activeDestination.title}
                    className="sidebar-image"
                  />
      
                  <div className="sidebar-content">
                    <h2>{activeDestination.title}</h2>
                    <p>{activeDestination.desc}</p>
      
                    <h2>Best Season</h2>
                    <p>{activeDestination.info1}</p>
      
                    <h2>Don't miss!!</h2>
                    <p>{activeDestination.info2}</p>
                  </div>
                </>
              )}
            </div>
      
            {activeDestination && (
              <div
                className="sidebar-overlay"
                onClick={closeSidebar}
              ></div>
            )}
    </Layout>
  )
}

export default Festivals