import React, { useState , useRef, useEffect } from "react";
import CardCarousel from "./../../components/CardCarousel.jsx";
import { nagalandLocations } from "./../../data/Districts.js";

function Section4() {
  const [activeTab, setActiveTab] = useState("stays");
  const locationRef = useRef(null);

  const [locationOpen, setLocationOpen] = useState(false);
  const [locationValue, setLocationValue] = useState("");
  
  useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      locationRef.current &&
      !locationRef.current.contains(event.target)
    ) {
      setLocationOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
    };
    }, []);

  return (
    <section className="section4">
      <div className="section4-content">
        <h1 className="section4-heading">PLAN YOUR VISIT</h1>
        <p className="section4-subtext">
          Discover our location, opening hours, and ticket information to make the most of your visit.
        </p>

        {/* Tabs */}
        <div className="section4-panel">
          <div className="section4-tabs">
            <button
              className={activeTab === "stays" ? "tab active" : "tab"}
              onClick={() => setActiveTab("stays")}
            >
              Stays
            </button>
            <button
              className={activeTab === "spots" ? "tab active" : "tab"}
              onClick={() => setActiveTab("spots")}
            >
              Tourist Spots
            </button>
            <button
              className={activeTab === "transport" ? "tab active" : "tab"}
              onClick={() => setActiveTab("transport")}
            >
              Transport
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="section4-filters">
             <div className="filter-item location-dropdown" ref={locationRef}>
                <i className="bi bi-geo-alt"></i>

                <input
                    type="text"
                    placeholder="Location"
                    value={locationValue}
                    onFocus={() => setLocationOpen(true)}
                    
                    onChange={(e) => {
                    setLocationValue(e.target.value);
                    setLocationOpen(true);
                    }}
                />

                {locationOpen && (
                    <div className="location-dropdown-menu">
                    {nagalandLocations
                        .filter(loc =>
                        loc.toLowerCase().includes(locationValue.toLowerCase())
                        )
                        .map((loc, index) => (
                        <div
                            key={index}
                            className="dropdown-item"
                            onClick={() => {
                                    setLocationValue(loc);   // fill input
                                    setLocationOpen(false); // close dropdown
                                    }}

                        >
                            {loc}
                        </div>
                        ))}
                    </div>
                )}
                </div>


          <div className="filter-item">
            <i className="bi bi-calendar-event"></i>
            <input type="date" />
          </div>

          <div className="filter-item">
            <i className="bi bi-calendar-check"></i>
            <input type="date" />
          </div>
        </div>

        {/* ✅ CARD CAROUSEL BELOW FILTER BAR */}
        <CardCarousel activeTab={activeTab} />
      </div>
    </section>
  );
}

export default Section4;
