import Slider from "react-slick";
import "./HeroCarousel.css";

export default function HeroCarousel() {
  const slides = [
    {
      img: "/assets/hero-img11.webp",
      title: "Naga Shawls",
      sub: "Handwoven Tradition",
    },
    {
      img: "/assets/hero2.jpg",
      title: "Bamboo Crafts",
      sub: "Sustainable Creations",
    },
    {
      img: "/assets/hero3.jpg",
      title: "Tribal Jewelry",
      sub: "Authentic Designs",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="hero-slider">
      <Slider {...settings}>
        {slides.map((s, i) => (
          <div className="slide" key={i}>
            <img src={s.img} alt="slide" className="slide-img" />
            <div className="slide-text">
              <h1>{s.title}</h1>
              <p>{s.sub}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
