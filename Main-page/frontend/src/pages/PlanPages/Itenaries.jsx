import React, { useState, useMemo } from "react";
import Layout from "../../components/Layout.jsx";
import "../../styles/PlanStyles.css";

import aboutHero from "../../assets/Plan/ihero.webp";

import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, arrayMove, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import "leaflet/dist/leaflet.css";

// ─── Wikimedia Commons images — no CORS issues, work on localhost ────────────
const PRESET_PLACES = [
  {
    id: "1",
    name: "Dzukou Valley",
    category: "Nature",
    rating: 4.8,
    description: "A stunning valley of flowers on the Nagaland–Manipur border, famous for seasonal blooms and trekking trails.",
    location: "Nagaland–Manipur Border",
    coordinates: [25.567, 94.05],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Dzukou_Valley_Nagaland_India.jpg/640px-Dzukou_Valley_Nagaland_India.jpg"
  },
  {
    id: "2",
    name: "Kohima War Cemetery",
    category: "History",
    rating: 4.7,
    description: "A moving memorial to the Allied soldiers who fell in the famous Battle of Kohima during World War II.",
    location: "Kohima, Nagaland",
    coordinates: [25.6751, 94.1086],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Kohima_War_Cemetery_1.jpg/640px-Kohima_War_Cemetery_1.jpg"
  },
  {
    id: "3",
    name: "Khonoma Village",
    category: "Village",
    rating: 4.6,
    description: "India's first green village, renowned for conservation and the rich heritage of the Angami Naga tribe.",
    location: "Kohima District",
    coordinates: [25.6333, 94.0333],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Khonoma_Village_Nagaland.jpg/640px-Khonoma_Village_Nagaland.jpg"
  },
  {
    id: "4",
    name: "Hornbill Festival",
    category: "Culture",
    rating: 4.9,
    description: "The 'Festival of Festivals' — a vibrant showcase of all 16 Naga tribes held every December at Kisama.",
    location: "Kisama Heritage Village",
    coordinates: [25.6205, 94.0587],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Hornbill_Festival_Nagaland.jpg/640px-Hornbill_Festival_Nagaland.jpg"
  },
  {
    id: "5",
    name: "Japfu Peak",
    category: "Adventure",
    rating: 4.5,
    description: "The second highest peak in Nagaland, offering breathtaking panoramas and rare rhododendron forests.",
    location: "Kohima District",
    coordinates: [25.5803, 94.0706],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Japfu_peak.jpg/640px-Japfu_peak.jpg"
  },
  {
    id: "6",
    name: "Touphema Village",
    category: "Heritage",
    rating: 4.4,
    description: "A heritage tourist village built entirely in traditional Naga style, perfect for cultural immersion.",
    location: "Kohima District",
    coordinates: [25.8103, 93.9876],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Touphema_Tourist_Village.jpg/640px-Touphema_Tourist_Village.jpg"
  },
  {
    id: "7",
    name: "Nagaland State Museum",
    category: "Museum",
    rating: 4.3,
    description: "Houses rich collections of Naga tribal artifacts, traditional costumes, weapons and WWII relics.",
    location: "Kohima",
    coordinates: [25.6760, 94.1100],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Nagaland_State_Museum.jpg/640px-Nagaland_State_Museum.jpg"
  },
  {
    id: "8",
    name: "Shilloi Lake",
    category: "Nature",
    rating: 4.6,
    description: "A star-shaped freshwater lake surrounded by dense forests, considered sacred by the Pochuri tribe.",
    location: "Phek District",
    coordinates: [26.0196, 94.7347],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Shilloi_Lake_Nagaland.jpg/640px-Shilloi_Lake_Nagaland.jpg"
  }
];

const CATEGORY_COLORS = {
  Nature:    "#16a34a",
  History:   "#b45309",
  Village:   "#7c3aed",
  Culture:   "#db2777",
  Adventure: "#0284c7",
  Heritage:  "#92400e",
  Museum:    "#475569",
  Food:      "#ea580c",
  default:   "#6b7280"
};

// Solid color placeholder SVGs as data URIs — always render, zero network dep
const COLOR_FALLBACKS = [
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='640' height='360'%3E%3Crect width='640' height='360' fill='%230e2a1a'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%2316a34a' font-size='48'%3E🏔%3C/text%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='640' height='360'%3E%3Crect width='640' height='360' fill='%232a1a0e'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23b45309' font-size='48'%3E🏛%3C/text%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='640' height='360'%3E%3Crect width='640' height='360' fill='%231a0e2a'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%237c3aed' font-size='48'%3E🏘%3C/text%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='640' height='360'%3E%3Crect width='640' height='360' fill='%232a0e1a'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23db2777' font-size='48'%3E🎭%3C/text%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='640' height='360'%3E%3Crect width='640' height='360' fill='%230e1a2a'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%230284c7' font-size='48'%3E⛰%3C/text%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='640' height='360'%3E%3Crect width='640' height='360' fill='%232a1a0e'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%2392400e' font-size='48'%3E🏯%3C/text%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='640' height='360'%3E%3Crect width='640' height='360' fill='%230e1422'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23475569' font-size='48'%3E🏛%3C/text%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='640' height='360'%3E%3Crect width='640' height='360' fill='%230e1a2a'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%2316a34a' font-size='48'%3E🌊%3C/text%3E%3C/svg%3E"
];

// ─── Sortable stop card inside itinerary ─────────────────────────────────────
function SortableStop({ place, onRemove, onChangeDay, onChangeTime, totalDays, fallbackIdx }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: place.id });
  const style = { transform: CSS.Transform.toString(transform), transition };
  const catColor = CATEGORY_COLORS[place.category] || CATEGORY_COLORS.default;

  return (
    <div ref={setNodeRef} style={style} className="itin-stop-card">
      <div className="itin-stop-drag" {...attributes} {...listeners}>⋮⋮</div>

      <img
        src={place.image}
        alt={place.name}
        className="itin-stop-img"
        onError={e => { e.target.onerror = null; e.target.src = COLOR_FALLBACKS[fallbackIdx % COLOR_FALLBACKS.length]; }}
      />

      <div className="itin-stop-body">
        <h4 className="itin-stop-name">{place.name}</h4>
        <div className="itin-stop-meta">
          <span className="itin-meta-icon">🕐</span>
          <input
            type="time"
            className="itin-stop-time"
            value={place.time || "09:00"}
            onChange={e => onChangeTime(place.id, e.target.value)}
          />
        </div>
        <div className="itin-stop-meta">
          <span className="itin-meta-icon">📍</span>
          <span className="itin-stop-loc">{place.location}</span>
        </div>
        <div className="itin-stop-footer">
          <select
            className="itin-day-select"
            value={place.day}
            onChange={e => onChangeDay(place.id, Number(e.target.value))}
          >
            {Array.from({ length: totalDays }, (_, i) => i + 1).map(d => (
              <option key={d} value={d}>Day {d}</option>
            ))}
          </select>
          <button className="itin-remove-btn" onClick={() => onRemove(place.id)}>✕</button>
        </div>
      </div>

      <span
        className="itin-cat-badge"
        style={{ background: catColor + "33", color: catColor, border: `1px solid ${catColor}55` }}
      >
        {place.category}
      </span>
    </div>
  );
}

// ─── Place card in Add to Itinerary panel ────────────────────────────────────
function PlaceCard({ place, added, onAdd, index }) {
  const catColor = CATEGORY_COLORS[place.category] || CATEGORY_COLORS.default;

  return (
    <div className="add-place-card">
      <div className="add-place-img-wrap">
        <img
          src={place.image}
          alt={place.name}
          className="add-place-img"
          onError={e => { e.target.onerror = null; e.target.src = COLOR_FALLBACKS[index % COLOR_FALLBACKS.length]; }}
        />
        <span className="add-place-cat" style={{ background: catColor + "ee" }}>
          {place.category}
        </span>
        <span className="add-place-rating">⭐ {place.rating}</span>
      </div>

      <div className="add-place-body">
        <div className="add-place-title-row">
          <h4 className="add-place-name">{place.name}</h4>
          <button
            className={`add-place-btn ${added ? "added" : ""}`}
            onClick={() => !added && onAdd(place)}
            disabled={added}
          >
            {added ? "✓" : "+"}
          </button>
        </div>
        <p className="add-place-desc">{place.description}</p>
        <div className="add-place-footer">
          <span className="add-place-loc">📍 {place.location}</span>
          <span className="add-place-view">View Details</span>
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
function Itenaries() {
  const [stops, setStops] = useState([]);
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [totalDays, setTotalDays] = useState(3);
  const [activeTab, setActiveTab] = useState("YOUR PLAN");
  const [activeDayFilter, setActiveDayFilter] = useState(0);
  const [addTab, setAddTab] = useState("Nearby");

  const addedIds = useMemo(() => new Set(stops.map(s => s.id)), [stops]);

  const groupedStops = useMemo(() => {
    const groups = {};
    for (let d = 1; d <= totalDays; d++) groups[d] = [];
    stops.forEach(p => {
      const d = Math.min(p.day, totalDays);
      if (!groups[d]) groups[d] = [];
      groups[d].push(p);
    });
    return groups;
  }, [stops, totalDays]);

  const visibleDays = activeDayFilter === 0
    ? Array.from({ length: totalDays }, (_, i) => i + 1)
    : [activeDayFilter];

  function addPlace(place) {
    if (!addedIds.has(place.id)) {
      setStops(prev => [...prev, { ...place, day: 1, time: "09:00" }]);
    }
  }
  function removeStop(id) { setStops(prev => prev.filter(p => p.id !== id)); }
  function changeDay(id, day) { setStops(prev => prev.map(p => p.id === id ? { ...p, day } : p)); }
  function changeTime(id, time) { setStops(prev => prev.map(p => p.id === id ? { ...p, time } : p)); }

  function handleDragEnd({ active, over }) {
    if (!over || active.id === over.id) return;
    setStops(prev => {
      const oi = prev.findIndex(p => p.id === active.id);
      const ni = prev.findIndex(p => p.id === over.id);
      return arrayMove(prev, oi, ni);
    });
  }

  async function searchPlaces(q) {
    if (!q.trim()) { setSearchResults([]); return; }
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(q)}&countrycodes=in&limit=5`
      );
      const data = await res.json();
      setSearchResults(data.map((p, i) => ({
        id: p.place_id.toString(),
        name: p.display_name.split(",")[0],
        category: p.type || "Place",
        rating: 4.0,
        description: `Located in ${p.display_name.split(",").slice(1, 3).join(", ")}`,
        location: p.display_name.split(",").slice(1, 3).join(", "),
        coordinates: [parseFloat(p.lat), parseFloat(p.lon)],
        image: COLOR_FALLBACKS[i % COLOR_FALLBACKS.length]
      })));
    } catch { setSearchResults([]); }
  }

  const placesToShow = query.trim()
    ? [...searchResults, ...PRESET_PLACES.filter(p => !searchResults.find(r => r.id === p.id))]
    : PRESET_PLACES;

  const route = stops.map(s => s.coordinates);

  return (
    <Layout>
      <section className="about-hero" style={{ backgroundImage: `url(${aboutHero})` }}>
        <div className="about-hero-overlay" />
        <div className="about-hero-content">
          <h1>Itineraries</h1>
          <p>Create your own Nagaland travel plan</p>
        </div>
      </section>

      <section className="planner-container">

        {/* MAP */}
        <div className="planner-map">
          <MapContainer center={[25.6751, 94.1086]} zoom={9} style={{ height: "100%", width: "100%" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {stops.map(place => (
              <Marker key={place.id} position={place.coordinates}>
                <Popup><strong>{place.name}</strong><br />Day {place.day} · {place.time}</Popup>
              </Marker>
            ))}
            {route.length > 1 && <Polyline positions={route} color="#e4572e" weight={3} dashArray="6,8" />}
          </MapContainer>
        </div>

        {/* ITINERARY PANEL */}
        <div className="planner-itinerary">
          <div className="itin-header">
            <div>
              <h2 className="itin-title">Itinerary</h2>
              <p className="itin-subtitle">NAGALAND EXPLORER ↓</p>
            </div>
            <div className="itin-top-tabs">
              {["AI PLAN", "YOUR PLAN"].map(t => (
                <button
                  key={t}
                  className={`itin-top-tab ${activeTab === t ? "active" : ""}`}
                  onClick={() => setActiveTab(t)}
                >{t}</button>
              ))}
              <button className="itin-menu-btn">☰</button>
            </div>
          </div>

          <div className="itin-day-pills">
            <button
              className={`itin-day-pill ${activeDayFilter === 0 ? "active" : ""}`}
              onClick={() => setActiveDayFilter(0)}
            >ALL DAYS</button>
            {Array.from({ length: totalDays }, (_, i) => i + 1).map(d => (
              <button
                key={d}
                className={`itin-day-pill ${activeDayFilter === d ? "active" : ""}`}
                onClick={() => setActiveDayFilter(d)}
              >Day {d}</button>
            ))}
            <button className="itin-day-pill add-day-pill" onClick={() => setTotalDays(d => Math.min(14, d + 1))}>+ Day</button>
            {totalDays > 1 && (
              <button className="itin-day-pill remove-day-pill" onClick={() => setTotalDays(d => Math.max(1, d - 1))}>− Day</button>
            )}
          </div>

          <div className="itin-days-scroll">
            {stops.length === 0 && (
              <div className="itin-empty">
                <span>🗺️</span>
                <p>Your itinerary is empty.<br />Add places from the right panel.</p>
              </div>
            )}
            <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
              <SortableContext items={stops.map(s => s.id)} strategy={verticalListSortingStrategy}>
                {visibleDays.map(day => (
                  <div key={day} className="itin-day-group">
                    <div className="itin-day-header">
                      <div className="itin-day-number">{day}</div>
                      <div className="itin-day-header-text">
                        <h3 className="itin-day-title">Day {day}: Explore Nagaland</h3>
                        <p className="itin-day-meta">{groupedStops[day]?.length || 0} stops</p>
                      </div>
                      <span className="itin-day-collapse">∨</span>
                    </div>
                    <div className="itin-stops-list">
                      {groupedStops[day]?.length === 0 ? (
                        <p className="itin-day-empty">No stops for this day yet</p>
                      ) : (
                        groupedStops[day].map((place, idx) => (
                          <SortableStop
                            key={place.id}
                            place={place}
                            fallbackIdx={idx}
                            onRemove={removeStop}
                            onChangeDay={changeDay}
                            onChangeTime={changeTime}
                            totalDays={totalDays}
                          />
                        ))
                      )}
                    </div>
                  </div>
                ))}
              </SortableContext>
            </DndContext>
          </div>
        </div>

        {/* ADD TO ITINERARY PANEL */}
        <div className="planner-places">
          <h2 className="add-panel-title">Add to Itinerary</h2>

          <div className="add-search-wrap">
            <span className="add-search-icon">🔍</span>
            <input
              className="add-search-input"
              placeholder="Search places in Nagaland..."
              value={query}
              onChange={e => { setQuery(e.target.value); searchPlaces(e.target.value); }}
            />
          </div>

          <div className="add-sub-tabs">
            {["Saved", "Nearby"].map(t => (
              <button
                key={t}
                className={`add-sub-tab ${addTab === t ? "active" : ""}`}
                onClick={() => setAddTab(t)}
              >{t}</button>
            ))}
          </div>

          <div className="add-places-list">
            {placesToShow.map((place, index) => (
              <PlaceCard
                key={place.id}
                place={place}
                index={index}
                added={addedIds.has(place.id)}
                onAdd={addPlace}
              />
            ))}
          </div>
        </div>

      </section>
    </Layout>
  );
}

export default Itenaries;