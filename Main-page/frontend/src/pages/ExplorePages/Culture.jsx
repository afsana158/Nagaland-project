import React ,{useState} from 'react'
import Layout from './../../components/Layout.jsx'
import './../../styles/ExploreStyles.css'
import aboutHero from './../../assets/Explore/Culture/hero.jpg'
import a1 from './../../assets/Explore/Culture/a1.jpg'
import a2 from './../../assets/Explore/Culture/a2.jpg'
import a3 from './../../assets/Explore/Culture/a3.jpg'
import a4 from './../../assets/Explore/Culture/a4.jpg'
import a5 from './../../assets/Explore/Culture/a5.jpg'
import a6 from './../../assets/Explore/Culture/a6.jpg'
import b1 from './../../assets/Explore/Culture/b1.jpg'
import b2 from './../../assets/Explore/Culture/b2.avif'
function Culture() {
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
          <h2 className="category-title">Cuisines & Culinary</h2>

          <div className="destination-grid">
            {[
              {
                img: a1,
                title: "Smoked Pork with Axone",
                desc: "Nagaland’s most iconic dish. Pork is smoked over firewood and cooked with axone (fermented soybean) giving a strong, earthy aroma and deep umami flavour.",
                info1:
                  "Winter (Nov–Feb) — traditionally smoked meats are prepared more during colder months.",
                info2:
                  "Ask for it cooked with bamboo shoot + Naga chilli for the authentic experience.",
              },
              {
                img: a2,
                title: "Galho",
                desc: "A traditional Naga dish made with fermented soybeans (axone) and served with bamboo shoots and Naga chillies.",
                info1: "All year round (especially monsoon & winter).",
                info2: "Try Galho with smoked pork and fresh leafy greens.",
              },
              {
                img: a3,
                title: "Bhut Jolokia",
                desc: "The world's hottest chili, Bhut Jolokia is a staple in Naga cuisine.",
                info1: "Fresh harvest: Aug–Oct",
                info2: "Ghost chilli chutney with smoked pork.",
              },
              {
                img: a4,
                title: "Fish Cooked in Bamboo",
                desc: "Fish cooked inside bamboo tubes with herbs and bamboo shoots — slow-cooked over fire.",
                info1: "Monsoon (fresh river fish available)",
                info2:
                  "The smoky bamboo aroma — very different from regular curries.",
              },
              {
                img: a5,
                title: "Anishi",
                desc: "Sun-dried colocasia leaves ground into cakes and cooked with pork.",
                info1: "Winter (leaves are sun-dried in colder months)",
                info2: "Strong earthy flavour — very traditional.",
              },
              {
                img: a6,
                title: "Zutho (Traditional Rice Beer)",
                desc: "Locally brewed rice beer, mildly sweet and fermented.",
                info1: "Festivals & winter gatherings",
                info2: "Best enjoyed during traditional celebrations.",
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
      

      {/* LOCAL LIFESTYLE */}
      <div className="destination-category">
        <h2 className="category-title">Local Lifestyle</h2>

        <div className="destination-grid">
          {[
            {
              img: b1,
              title: "Kohima Heritage Walk",
              desc: "A guided walk through the heritage sites of Kohima, showcasing the rich cultural history of Nagaland.",
              info1: "All year round",
              info2: "Best experienced with a local guide.",
            },
            {
              img: b2,
              title: "Khonoma Eco-Heritage Walk",
              desc: "India’s first green village. Known for terraced fields, conservation practices, and Angami warrior history.",
              info1: "October – April | Location: 20 km from Kohima",
              info2:
                "Terraced rice fields and traditional carved wooden houses.",
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

export default Culture