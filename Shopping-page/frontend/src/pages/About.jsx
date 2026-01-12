import { useEffect } from "react";
import "./About.css";
import textileImg from "../assets/craftsBanner.jpg";
import bambooImg from "../assets/bambooArtist.png";
import jewelryImg from "../assets/WomenArtist.webp";
// import artisanVideo from "../assets/NagalandArtisanVideo.mp4";
// import handwovenVideo from "../assets/HandwovenTextilesVideo.mp4";
// import bambooVideo from "../assets/BambooCraftVideo.mp4";
import People from "../assets/best-places-to-visit.webp";

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
        className="about-hero-wrapper"
        style={{ backgroundImage: `url(${People})` }}
      >
        <div className="about-hero-overlay">
          <h1>About Nagacrafts</h1>
          <p>
            Authentic handcrafted products from Nagaland, preserving tribal
            heritage, culture, and artisanal excellence.
          </p>
        </div>
        <div className="about-story reveal">
          <h2>Our Story</h2>
          <p>
            Nagacrafts is a celebration of the indigenous artistry of Nagaland —
            a land rich in culture, tradition, and untold stories. Rooted in
            centuries-old practices, our journey began with a simple idea: to
            preserve and share the craftsmanship of tribal communities that
            often goes unnoticed beyond their villages.
          </p>
          <p>
            Across the hills of Nagaland, art is not created for display alone —
            it is a way of life. From weaving textiles on traditional looms to
            carving masks and shaping bamboo by hand, these skills are inherited
            through generations, passed down as stories, rituals, and identity.
            Nagacrafts bridges this heritage with the modern world. We work
            closely with artisans to ensure their creations are valued fairly,
            their stories are heard, and their traditions continue to thrive in
            a rapidly changing world.
          </p>

          <p>
            Every product you find here carries more than craftsmanship — it
            carries the spirit of a community, the patience of handmade work,
            and a promise to keep culture alive.
          </p>
        </div>
      </section>

      {/* STORY */}

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
      {/* <section className="about-section dark reveal">
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
      </section> */}

      {/* WHY US */}
      <section className="about-section dark reveal">
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
