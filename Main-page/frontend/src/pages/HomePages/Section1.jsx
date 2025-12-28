import React from "react";
import { Carousel } from "react-bootstrap";
import { useRef, useState } from "react";
import "../../styles/HomeStyles.css";
import bg1 from "../../assets/hero/bg1.webp";
import bg2 from "../../assets/hero/bg2.jpg";
import bg4 from "../../assets/hero/bg4.jpg";
import bg5 from "../../assets/hero/bg5.jpg";
import bg6 from "../../assets/hero/bg6.jpg";
import bg7 from "../../assets/hero/bg7.jpg";
import bgMusic from "../../assets/hero/bg-music.mp3";

function Section1() {
    const audioRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const toggleMusic = () => {
    if (muted) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setMuted(!muted);
  };

  return (
    <section className="hero_section">
         <audio ref={audioRef} loop>
        <source src={bgMusic} type="audio/mp3" />
      </audio>

      {/* 🎵 Music toggle */}
<div className="music-control" onClick={toggleMusic}>
  <i className={`bi ${muted ? "bi-volume-mute" : "bi-volume-up"}`}></i>
</div>

      {/* ⬇ Discover */}
      <div className="discover-wrapper">
      <div className="discover">
        <span>Discover</span>
        <div className="arrow">⌄</div>
      </div>
        </div>

      <Carousel 
      fade 
      controls={false}
      indicators={false} 
      interval={8000}
      pause={false}>
        <Carousel.Item>
          <div
            className="hero_slide"
            style={{ backgroundImage: `url(${bg1})` }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="hero_slide"
            style={{ backgroundImage: `url(${bg2})` }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="hero_slide"
            style={{ backgroundImage: `url(${bg4})` }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="hero_slide"
            style={{ backgroundImage: `url(${bg5})` }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="hero_slide"
            style={{ backgroundImage: `url(${bg6})` }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="hero_slide"
            style={{ backgroundImage: `url(${bg7})` }}
          />
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default Section1;
