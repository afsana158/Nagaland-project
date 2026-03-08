import React, { useState } from "react";
import Layout from "./../../components/Layout.jsx";
import "./../../styles/PlanStyles.css";

import aboutHero from "./../../assets/Plan/ihero.webp";
import i1 from "./../../assets/Plan/i1.webp";
import i2 from "./../../assets/Plan/i2.webp";
import i3 from "./../../assets/Plan/i3.webp";

function Itenaries() {
 
   const [active, setActive] = useState(null);
  
    const openSidebar = (data) => setActive(data);
    const closeSidebar = () => setActive(null);

  const itineraries = [

{
title:"3 Day Kohima Explorer",
img:i1,
desc:"Perfect for short trips, this itinerary explores Kohima’s historic landmarks, traditional villages and the scenic Dzukou Valley trek.",

weatherCity:"Kohima",

details:`
Day 1: Arrive in Dimapur and drive to Kohima. Visit the Kohima War Cemetery, Nagaland State Museum and explore Kohima local market.

Day 2: Travel to Khonoma Green Village to see terraced rice fields and learn about Angami tribal heritage.

Day 3: Trek to the famous Dzukou Valley and enjoy panoramic views before returning to Kohima.
`,

info1:"Dimapur is the main entry point with the nearest airport and railway station. From Dimapur, Kohima is about 75 km and can be reached by taxi or shared cabs.",

info2:"Dzukou Valley trek, Kohima War Cemetery, Khonoma Green Village and the vibrant Kohima Market."
},

{
title:"5 Day Culture & Nature Journey",
img:i2,
desc:"A balanced trip combining cultural experiences, tribal villages and the natural beauty of Nagaland’s hills.",

weatherCity:"Kohima",

details:`
Day 1: Arrive in Dimapur and explore the town's markets and local food.

Day 2: Travel to Kohima and visit the State Museum, Cathedral Church and Kohima War Cemetery.

Day 3: Visit Khonoma Green Village and interact with the Angami community.

Day 4: Trek to Dzukou Valley and explore the lush rolling hills.

Day 5: Visit Kisama Heritage Village and experience traditional Naga architecture before returning to Dimapur.
`,

info1:"Fly or take a train to Dimapur. From there, taxis and shared transport connect Dimapur with Kohima and nearby villages.",

info2:"Cultural performances at Kisama Heritage Village, traditional Angami houses in Khonoma and the scenic Dzukou Valley trek."
},

{
title:"7 Day Ultimate Nagaland Adventure",
img:i3,
desc:"An immersive week-long journey exploring Nagaland’s diverse tribes, villages, mountains and cultural heritage.",

weatherCity:"Kohima",

details:`
Day 1: Arrive in Dimapur and explore local markets.

Day 2: Travel to Kohima and visit Kohima War Cemetery, State Museum and Cathedral Church.

Day 3: Visit Khonoma Green Village and explore nearby viewpoints.

Day 4: Trek through the breathtaking Dzukou Valley.

Day 5: Travel to Mokokchung district and visit Ao tribal villages like Ungma and Mopungchuket.

Day 6: Journey to Mon district and explore Longwa village where the Indo-Myanmar border passes through the village chief’s house.

Day 7: Return to Dimapur with stops at scenic viewpoints along the way.
`,

info1:"Dimapur is the gateway to Nagaland. From there you can travel by taxi or shared vehicles to Kohima, Mokokchung and Mon district.",

info2:"Meeting the Konyak tribe in Longwa village, trekking in Dzukou Valley and exploring Ao villages in Mokokchung."
}

]

  return (
    <Layout>
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${aboutHero})` }}
      >
        <div className="about-hero-overlay"></div>

        <div className="about-hero-content">
          <h1>Itenaries</h1>
          <p>Plan your perfect trip to Nagaland with our curated itineraries.</p>
        </div>
      </section>

      <section className="destinations-content">
        <div className="itinerary-grid">
          {itineraries.map((item, i) => (
            <div
              key={i}
              className="itinerary-card"
              onClick={() => openSidebar(item)}
            >
              <img src={item.img} alt={item.title} />

              <div className="itinerary-overlay">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SIDEBAR ================= */}
{/* ================= SIDEBAR ================= */}

<div className={`itinerary-sidebar ${active ? "active" : ""}`}>

{active && (

<>

<button
className="sidebar-close"
onClick={closeSidebar}
>
✕
</button>

<img
src={active.img}
alt={active.title}
className="sidebar-image"
/>

<div className="sidebar-content">

<h2>{active.title}</h2>

<p>{active.desc}</p>

<h2>Itinerary Plan</h2>
<p className="itinerary-details">
{active.details}
</p>

<h2>How to Get There</h2>
<p>{active.info1}</p>

<h2>Don't Miss</h2>
<p>{active.info2}</p>

</div>

</>

)}

</div>

{active && (
<div
className="sidebar-overlay"
onClick={()=>setActive(null)}
></div>
)}
    </Layout>
  );
}

export default Itenaries;