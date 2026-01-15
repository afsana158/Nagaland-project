import { useEffect } from "react";
import "./About.css";
import textileImg from "../assets/craftsBanner.jpg";
import bambooImg from "../assets/bambooArtist.png";
import jewelryImg from "../assets/WomenArtist.webp";
import nagaGirl from "../assets/Lotha_Naga_girl.jpg";
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
      <section className="artisans-editorial reveal">
        {/* LEFT TEXT */}
        <div className="artisans-text">
          <h2>Artisans of Nagaland</h2>

          <p>
            Across the hills and valleys of Nagaland, craftsmanship is not
            merely a profession — it is a way of life. Artisans inherit their
            skills through generations, shaped by culture, community, and
            tradition.
          </p>

          <p>
            From handwoven textiles and bamboo crafts to tribal jewellery, every
            creation reflects patience, identity, and harmony with nature. No
            two pieces are ever the same — each carries the mark of the hands
            that shaped it.
          </p>

          <p>
            By supporting these artisans, Nagacrafts ensures fair recognition,
            sustainable livelihoods, and the preservation of indigenous
            knowledge in a rapidly modernising world.
          </p>

          <p>
            Beyond skill and tradition lies a profound relationship with land
            and community. The rhythms of nature, ancestral knowledge, and
            collective memory influence every design and motif. In an age of
            mass production, these artisans choose patience and purpose—creating
            pieces that honour heritage while quietly resisting the loss of
            cultural identity.
          </p>
        </div>

        {/* RIGHT IMAGE GRID */}
        <div className="artisans-gallery">
          <img src={People} alt="Artisan at work" className="img-tall" />
          <img src={textileImg} alt="Textile craft" />
          <img src={bambooImg} alt="Bamboo craft" />
          <img src={jewelryImg} alt="Jewellery making" />
          <img src={nagaGirl} alt="Lotha Naga" />
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
