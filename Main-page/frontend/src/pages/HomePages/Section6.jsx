import React from "react";
import wood from "./../../assets/section6/wood.jpg"
import bamboo from "./../../assets/section6/bamboo.jpg"
import food from "./../../assets/section6/food.jpg"
import shawl from "./../../assets/section6/shawl.jpg"
import jwellery from "./../../assets/section6/jwellery.jpg"
import j2 from "./../../assets/section6/j2.jpg"
import cuisine from "./../../assets/section6/cuisine.jpg"

function Section6() {
  return (
    <section className="section6">
      <div className="section6-content">
        <h1 className="section6-heading">Take Home a Piece of Nagaland</h1>
        <p className="section6-subtext">
            Unique souvenirs and handcrafted treasures
        </p>
      
       <section className="section6-mosaic">
      <div className="mosaic-grid">

        {/* BIG CARD */}
        <div className="mosaic-card large">
          <img src={wood} alt="Wood Carving" />
          <div className="mosaic-overlay">
            <h3>Wood Carving</h3>
          </div>
        </div>

        {/* SMALL CARDS */}
        <div className="mosaic-card">
          <img src={food} alt="Smoked Pork with Bamboo Shoot" />
          <div className="mosaic-overlay">
            <h3>Smoked Pork with Bamboo Shoot</h3>
          </div>
        </div>

        <div className="mosaic-card">
          <img src={shawl} alt="Ao Naga Shawl" />
          <div className="mosaic-overlay">
            <h3>Ao Naga Shawl</h3>
          </div>
        </div>

        <div className="mosaic-card">
          <img src={jwellery} alt="Bone Jewellery" />
          <div className="mosaic-overlay">
            <h3>Bone Jewellery</h3>
          </div>
        </div>

        <div className="mosaic-card">
          <img src={bamboo} alt="Bamboo & Cane Crafts" />
          <div className="mosaic-overlay">
            <h3>Bamboo & Cane Crafts</h3>
          </div>
        </div>
      </div>
        <div className="mosaic-row-2">
  <div className="mosaic-card wide">
    <img src={cuisine} alt="Naga Cuisine" />
    <div className="mosaic-overlay">
      <h3>Naga Cuisine</h3>
    </div>
  </div>

  <div className="mosaic-card tall">
    <img src={j2} alt="Bead jwellery" />
    <div className="mosaic-overlay">
      <h3>Bead jwellery</h3>
    </div>
  </div>
</div>
      
    </section>
        </div>
      {/* Map will come here next */}
    </section>
  );
}

export default Section6;
