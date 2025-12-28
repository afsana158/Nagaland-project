import React from "react";
import { Carousel } from "react-bootstrap";
// import { useState } from "react";
import "./Hero.css";
import banner from "../assets/hornbill.png";

function Hero() {
  return (
    <section className="hero_section">
      <div className="hero_content">
        <h1>
          Welcome to <span>Nagacrafts</span>
        </h1>
        <p>Authentic handcrafted products from Nagaland</p>
      </div>

      <div className="discover-wrapper">
        <div className="discover">
          <span>Discover</span>
          <div className="arrow">⌄</div>
        </div>
      </div>

      <div
        className="hero_slide"
        style={{ backgroundImage: `url(${banner})` }}
      />
    </section>
  );
}

export default Hero;
