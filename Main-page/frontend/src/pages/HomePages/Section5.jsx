import React from "react";
import parallaxImg from "./../../assets/section5/pic1.jpg";

function Section5() {
  return (
    <section
      className="section5"
      style={{
        backgroundImage: `url(${parallaxImg})`
      }}
    >
      <div className="section5-overlay"></div>

      <div className="section5-content">
        <h1>Hornbill Festival</h1>
        <p>Where culture, nature, and tradition come alive for all tribes</p>
        
      </div>
    </section>
  );
}

export default Section5;
