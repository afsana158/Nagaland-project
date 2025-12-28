import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./ProductSlider.css";
import jewelleryImg from "../assets/jewellerybanner.jpg";
import crafts from "../assets/craftsBanner.jpg";

const slides = [
  {
    id: 1,
    title: "Nagaland Jewellery",
    subtitle: "Explore our Best Sellers!",
    image: jewelleryImg,
    slug: "jewellery",
  },
  {
    id: 2,
    title: "Handcrafted Crafts",
    subtitle: "Authentic Tribal Art from Nagaland",
    image: crafts,
    slug: "crafts",
  },
];

export default function CategoryHeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

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
            <button onClick={() => navigate(`/shop?category=${slide.slug}`)}>
              SHOP NOW
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}
