import { useEffect } from "react";
import "./About.css";
import textileImg from "../assets/craftsBanner.jpg";
import bambooImg from "../assets/bambooArtist.png";
import jewelryImg from "../assets/WomenArtist.webp";
import artisanVideo from "../assets/NagalandArtisanVideo.mp4";
import handwovenVideo from "../assets/HandwovenTextilesVideo.mp4";
import bambooVideo from "../assets/BambooCraftVideo.mp4";
import People from "../assets/PeopleofNagaland.jpg";

export default function About() {
  // Scroll animation using IntersectionObserver
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="about-page">
      {/* HERO */}
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${People})` }}
      >
        <div className="about-hero-overlay">
          <h1>About Nagacrafts</h1>
          <p>
            Authentic handcrafted products from Nagaland, preserving tribal
            heritage, culture, and artisanal excellence.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="about-section dark reveal">
        <h2>Our Story</h2>
        <p>
          Nagacrafts is a celebration of the indigenous artistry of Nagaland.
          Rooted in centuries-old traditions, our platform brings together
          handcrafted jewellery, wooden masks, bamboo crafts, and textiles made
          by skilled tribal artisans.
        </p>
        <p>
          Each product tells a story — of community, identity, and craftsmanship
          passed down through generations.
        </p>
      </section>

      {/* ARTISANS */}
      <section className="about-section light reveal">
        <h2>Artisans of Nagaland</h2>
        <p>
          Our artisans come from remote villages across Nagaland. Their skills
          are inherited, not taught in classrooms. Each piece is handmade with
          patience, care, and cultural pride.
        </p>

        <div className="artisan-grid">
          <div className="artisan-card">
            <img src={textileImg} alt="Textile" />
          </div>
          <div className="artisan-card">
            <img src={bambooImg} alt="Bamboo Weavers" />
          </div>
          <div className="artisan-card">
            <img src={jewelryImg} alt="Jewellery Makers" />
          </div>
        </div>
      </section>

      {/* VIDEO / GALLERY */}
      <section className="about-section dark reveal">
        <h2>Craft in Motion</h2>
        <div className="media-grid">
          <div className="media-box">
            <video src={artisanVideo} autoPlay muted loop playsInline />
            <span>Artisan at Work</span>
          </div>
          <div className="media-box">
            <video src={bambooVideo} autoPlay muted loop playsInline />
            <span>Bamboo Craft</span>
          </div>
          <div className="media-box">
            <video src={handwovenVideo} autoPlay muted loop playsInline />
            <span>Handwoven Textiles</span>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="about-section light reveal">
        <h2>Why Choose Nagacrafts?</h2>
        <ul className="why-list">
          <li>✔ 100% Authentic & Handcrafted</li>
          <li>✔ Ethically sourced from artisans</li>
          <li>✔ Sustainable materials</li>
          <li>✔ Timeless tribal collectibles</li>
        </ul>
      </section>
    </main>
  );
}
