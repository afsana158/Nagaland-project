import h1 from "./../assets/section4/h1.jpg";
import h2 from "./../assets/section4/h2.jpg";
import h3 from "./../assets/section4/h3.jpg";
import h4 from "./../assets/section4/h4.jpg";
import h5 from "./../assets/section4/h5.jpg";

import s1 from "./../assets/section4/r1.jpg";
import s2 from "./../assets/section4/r2.jpg";
import s3 from "./../assets/section4/r3.jpg";
import s4 from "./../assets/section4/r4.jpg";
import s5 from "./../assets/section4/r5.jpg";

const data = {
  stays: [
    { title: "Luxury Stay", subtitle: "Kohima", image: h1 },
    { title: "Resort", subtitle: "Kohima", image: h2 },
    { title: "Hotel", subtitle: "Dzuko", image: h3 },
    { title: "Homestay", subtitle: "Mokokchung", image: h4 },
    { title: "Eco Lodge", subtitle: "Mon", image: h5 }
  ],
  spots: [
    { title: "Dzukou Valley", subtitle: "Nature", image: s1 },
    { title: "Japfu Peak", subtitle: "Adventure", image: s2 },
    { title: "War Cemetery", subtitle: "Heritage", image: s3 },
    { title: "Khonoma Village", subtitle: "Culture", image: s4 },
    { title: "Shilloi Lake", subtitle: "Scenic", image: s5 }
  ],
  transport: [
    { title: "Taxi Service", subtitle: "City Travel", image: "/img/trans1.jpg" },
    { title: "Bus Routes", subtitle: "Intercity", image: "/img/trans2.jpg" },
    { title: "Bike Rentals", subtitle: "Tourist Friendly", image: "/img/trans3.jpg" }
  ]
};

function CardCarousel({ activeTab }) {
  return (
    <div className="carousel">
      {data[activeTab].map((item, index) => (
        <div className="carousel-card" key={index}>
          <img src={item.image} alt={item.title} />
          <div className="card-overlay">
            <h3>{item.title}</h3>
            <p>{item.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CardCarousel
