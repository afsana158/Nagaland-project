import React, { useState } from "react";
import Layout from "../../components/Layout";
import "../../styles/PlanStyles.css";
import hero from "../../assets/plan/shero.jpg";
import h1 from "../../assets/plan/h1.jpg";
import h2 from "../../assets/plan/h2.jpg";
import h3 from "../../assets/plan/h3.jpg";
import h4 from "../../assets/plan/h4.jpg";

function Stays() {

  const [city, setCity] = useState("kohima");
  const [type, setType] = useState("all");

  const stays = [
    {
      name: "Hotel Japfü",
      city: "kohima",
      type: "hotel",
      rating: "4.3",
      img: h1 ,
      link: "https://www.makemytrip.com/hotels/"
    },
    {
      name: "Niraamaya Retreats",
      city: "dimapur",
      type: "luxury",
      rating: "4.6",
      img: h2 ,
      link: "https://www.goibibo.com/hotels/"
    },
    {
      name: "Khonoma Homestay",
      city: "kohima",
      type: "homestay",
      rating: "4.7",
      img: h3,
      link: "https://www.makemytrip.com/hotels/"
    },
    {
      name: "Dzukou Eco Camp",
      city: "kohima",
      type: "eco",
      rating: "4.2",
      img: h4 ,
      link: "https://www.goibibo.com/hotels/"
    }
  ];

  const filteredStays = stays.filter((stay) => {
    return (
      (city === "all" || stay.city === city) &&
      (type === "all" || stay.type === type)
    );
  });

  return (
    <Layout>

      {/* HERO */}
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <h1>STAYS IN NAGALAND</h1>
          <p>Find hotels, homestays and eco lodges across the state</p>
        </div>
      </section>

      <section className="destinations-content">

        {/* FILTERS */}

        <div className="stay-filters">

          <h2 className="category-title">Find Your Stay</h2>

          <div className="filter-row">

            <select onChange={(e) => setCity(e.target.value)}>
              <option value="all">All Cities</option>
              <option value="kohima">Kohima</option>
              <option value="dimapur">Dimapur</option>
              <option value="mokokchung">Mokokchung</option>
              <option value="mon">Mon</option>
            </select>

            <select onChange={(e) => setType(e.target.value)}>
              <option value="all">All Types</option>
              <option value="hotel">Hotels</option>
              <option value="homestay">Homestays</option>
              <option value="eco">Eco Stays</option>
              <option value="luxury">Luxury</option>
            </select>

          </div>

        </div>


        {/* FEATURED STAYS */}

        <div className="stay-grid">

          {filteredStays.map((stay, i) => (

            <div key={i} className="stay-card">

              <img src={stay.img} alt={stay.name} />

              <div className="stay-info">
                <h3>{stay.name}</h3>
                <p>⭐ {stay.rating}</p>
                <a href={stay.link} target="_blank">Book Now</a>
              </div>

            </div>

          ))}

        </div>


        {/* EMBEDDED HOTEL WIDGET */}

        <div className="hotel-widget">

          <h2 className="category-title">Search More Hotels</h2>

          <iframe
            src="https://www.booking.com/index.html"
            title="hotel-booking"
            width="100%"
            height="600"
            style={{ border: "none", borderRadius: "10px" }}
          ></iframe>

        </div>

      </section>

    </Layout>
  );
}

export default Stays;