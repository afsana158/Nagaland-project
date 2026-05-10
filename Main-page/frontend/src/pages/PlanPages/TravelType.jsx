import React, { useState } from "react";
import Layout from "../../components/Layout";
import "./../../styles/PlanStyles.css";
import aboutHero from "./../../assets/plan/thero.avif";

const travelData = {
  solo: {
    title: "Solo Travelers",
    experiences:
      "Solo travelers in Nagaland can enjoy immersive experiences such as trekking through the scenic Dzukou Valley, exploring the cultural streets of Kohima on a heritage walk, and visiting the fascinating Longwa village where the international border between India and Myanmar passes through the chief’s house. Attending the Hornbill Festival also allows solo travelers to experience multiple tribal cultures in one place while meeting people from around the world.",
    safety:
      "Nagaland is generally considered welcoming and safe for travelers, but solo visitors should still take basic precautions. Inform your accommodation hosts of your plans when heading out for treks or remote villages, avoid traveling late at night in unfamiliar areas, and keep offline maps available as mobile connectivity can be inconsistent in mountainous regions.",
    community:
      "Travelers can connect easily with local communities through village homestays and shared transport systems. Shared taxis operate between towns such as Dimapur, Kohima, Mokokchung, and Mon. Local guides are often available in villages and are a great way to learn about tribal traditions, history, and everyday life.",
    packing:
      "Pack sturdy trekking shoes, warm clothing for cool evenings, a power bank, reusable water bottle, and basic medicines. Because weather can change quickly in the hills, carrying a lightweight rain jacket and offline navigation tools is highly recommended.",
    destinations:
      "Suggested destinations include Dzukou Valley for trekking and nature, Kohima for heritage walks and cafés, Longwa village for cultural exploration, and Kisama Heritage Village where the Hornbill Festival takes place."
  },

  family: {
    title: "Family Travel",
    experiences:
      "Families visiting Nagaland can enjoy relaxed cultural and nature-based experiences such as exploring Khonoma Green Village, walking through Kohima Zoo, and attending cultural performances at Kisama Heritage Village. Visiting local markets together also offers children an engaging way to learn about traditional foods and crafts.",
    safety:
      "When traveling with family, it is advisable to plan shorter travel distances between destinations and choose comfortable accommodations such as eco-resorts or village homestays. Parents should keep children close in busy markets and carry sufficient water and snacks when visiting rural areas.",
    community:
      "Family travelers often enjoy the hospitality of local homestays where hosts share meals and stories about village life. Cultural storytelling sessions and guided village walks provide families with meaningful opportunities to connect with local communities.",
    packing:
      "Families should pack comfortable walking shoes, rain jackets, sunscreen, snacks for children, and a small first-aid kit. Warm clothing is useful during evenings in hill areas such as Kohima and Phek.",
    destinations:
      "Recommended family-friendly destinations include Kohima for cultural landmarks, Khonoma village for eco-tourism, Shilloi Lake for scenic relaxation, and Kisama Heritage Village for cultural events."
  },

  seniors: {
    title: "Senior-Friendly Travel",
    experiences:
      "Senior travelers can enjoy scenic drives around Kohima and nearby villages, visits to the Kohima War Cemetery, and relaxed cultural experiences in heritage villages like Tuophema and Khonoma. Local handicraft markets also provide a pleasant way to experience Naga culture without extensive walking.",
    safety:
      "Senior travelers should avoid difficult treks or long hikes and instead focus on easily accessible viewpoints and cultural attractions. Traveling with a guide or private vehicle is recommended for comfort and safety, and carrying essential medications is important.",
    community:
      "Village homestays offer peaceful environments where visitors can experience traditional Naga hospitality. Local guides often share stories about tribal history, making the experience engaging and educational.",
    packing:
      "Essential items include warm clothing, comfortable footwear, medications, sunscreen, and walking support if needed. A small travel bag with personal health essentials is advisable.",
    destinations:
      "Senior-friendly destinations include Kohima War Cemetery, Khonoma village, the State Museum in Kohima, and scenic viewpoints in Phek district."
  },

  students: {
    title: "Students & Study Tours",
    experiences:
      "Nagaland offers excellent learning opportunities for student groups interested in anthropology, ecology, and cultural studies. Visits to the State Museum, tribal villages, and conservation initiatives such as those in Khonoma provide hands-on exposure to indigenous knowledge and environmental practices.",
    safety:
      "Student groups should travel with guides or instructors and follow local regulations when visiting villages or protected areas. It is important to respect tribal customs and always seek permission before photographing people or cultural artifacts.",
    community:
      "Students often interact with local communities through workshops, craft demonstrations, and village immersion programs. These exchanges create valuable cultural learning experiences.",
    packing:
      "Students should carry backpacks, notebooks, cameras, power banks, comfortable walking shoes, and weather-appropriate clothing for field visits.",
    destinations:
      "Suggested educational destinations include Kohima State Museum, Khonoma conservation village, Kisama Heritage Village, and traditional villages in Mokokchung district."
  },

  women: {
    title: "Women Travelers",
    experiences:
      "Women travelers can explore Nagaland through cultural walks, handicraft workshops, and café experiences in Kohima. Markets run largely by women provide a fascinating glimpse into local life, while festivals offer vibrant cultural interactions.",
    safety:
      "Nagaland is widely regarded as safe for women travelers, but standard precautions should still be taken such as avoiding isolated areas at night and choosing trusted accommodations or homestays.",
    community:
      "Women travelers can connect with local communities through craft markets, women-led cooperatives, and homestays where hosts share cooking traditions and daily routines.",
    packing:
      "Comfortable clothing, a portable charger, personal essentials, and a small day backpack are recommended. Light layers are useful due to changing hill weather.",
    destinations:
      "Recommended destinations include Kohima markets, Ruzaphema craft village, Khonoma village, and Kisama Heritage Village."
  },

  budget: {
    title: "Budget Travel",
    experiences:
      "Budget travelers can explore Nagaland through trekking, village visits, and cultural festivals without spending heavily. Trekking routes like Dzukou Valley and exploring local markets offer rich experiences at minimal cost.",
    safety:
      "Budget travelers should plan routes carefully, travel during daylight hours, and choose well-reviewed guesthouses or homestays. Carrying cash is advisable because digital payment options may be limited in rural areas.",
    community:
      "Backpackers often rely on shared taxis and homestays which provide opportunities to interact closely with local communities and fellow travelers.",
    packing:
      "Essential packing includes a lightweight backpack, rain cover, reusable water bottle, basic camping or trekking gear, and power bank.",
    destinations:
      "Top destinations for budget travel include Dzukou Valley, Kohima markets, Mokokchung villages, and Mon district cultural villages."
  }
};

function TravelType() {
  const [activeTab, setActiveTab] = useState("solo");
  const data = travelData[activeTab];

  return (
    <Layout>
      

        

         {/* HERO */}
              <section
                className="about-hero"
                style={{ backgroundImage: `url(${aboutHero})` }}
              >
                <div className="about-hero-overlay"></div>
                <div className="about-hero-content">
                  <h1>Travel by Type</h1>
                  <p>Discover Nagaland through experiences tailored to your travel style.</p>
                </div>
              </section>
        
<section className="destinations-content">
        {/* Tabs */}
        <div className="tabs">
          {Object.keys(travelData).map((key) => (
            <button
              key={key}
              className={`tab ${activeTab === key ? "active" : ""}`}
              onClick={() => setActiveTab(key)}
            >
              {travelData[key].title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="tab-content">

          <section>
            <h2>Top Experiences</h2>
            <p>{data.experiences}</p>
          </section>

          <section>
            <h2>Safety & Travel Tips</h2>
            <p>{data.safety}</p>
          </section>

          <section>
            <h2>Community & Connection</h2>
            <p>{data.community}</p>
          </section>

          <section>
            <h2>Essential Packing List</h2>
            <p>{data.packing}</p>
          </section>

          <section>
            <h2>Suggested Destinations</h2>
            <p>{data.destinations}</p>
          </section>

        </div>
      
      </section>
    </Layout>
  );
}

export default TravelType;