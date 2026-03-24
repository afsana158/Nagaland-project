import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./ProductSlider.css";
import jewelleryImg from "../assets/necklaceBanner.png";
import crafts from "../assets/Mask.png";
import handloom from "../assets/handloom.jpg";
import souvenir from "../assets/souvenirs.png";

const slides = [
  {
    id: 1,
    title: "Jewellery",
    subtitle: "Explore our Best Sellers!",
    image: jewelleryImg,
    slug: "jewellery",
  },
  {
    id: 2,
    title: "Naga Tribal Crafts",
    subtitle: "Authentic Tribal Art from Nagaland",
    image: crafts,
    slug: "naga-crafts",
  },
  {
    id: 3,
    title: "Handlooms",
    subtitle: "Traditional Naga Weaves",
    image: handloom,
    slug: "handlooms",
  },
  {
    id: 4,
    title: "Souvenirs",
    subtitle: "Take a Piece of Nagaland Home",
    image: souvenir,
    slug: "souvenirs",
  },
];

export default function CategoryHeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="hero-card-section">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`hero-card ${index === current ? "active" : ""}`}
        >
          <img src={slide.image} alt={slide.title} className="hero-img" />
          <div className="hero-card-overlay">
            <h1>{slide.title}</h1>
            <p>{slide.subtitle}</p>
            <button onClick={() => navigate(`/shop/${slide.slug}`)}>
              SHOP NOW
            </button>
          </div>
        </div>
      ))}

      <button className="slider-arrow left" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="slider-arrow right" onClick={nextSlide}>
        &#10095;
      </button>
    </section>
  );
}
