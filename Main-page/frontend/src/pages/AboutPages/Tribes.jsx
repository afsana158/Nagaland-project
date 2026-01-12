import React from 'react'
import Layout from '../../components/Layout.jsx'
import './../../styles/AboutStyles.css'
import aboutHero from '../../assets/About/Tribes/pic2.jpg'
import mapImage from '../../assets/About/Tribes/map.jpg'

import angami from '../../assets/About/Tribes/angami.webp'
import ao from '../../assets/About/Tribes/ao.jpg'
import chakhesang from '../../assets/About/Tribes/chakhesang.jpg' 
import chang from '../../assets/About/Tribes/chang.jpg'
import khiamniungan from '../../assets/About/Tribes/khiamniungan.jpg'
import konyak from '../../assets/About/Tribes/konyak.jpg'
import lotha from '../../assets/About/Tribes/lotha.jpg'
import phom from '../../assets/About/Tribes/phom.jpg'
import pochury from '../../assets/About/Tribes/pochury.jpg'
import rengma from '../../assets/About/Tribes/rengma.jpg'
import sangtam from '../../assets/About/Tribes/sangtam.jpg'
import sumi from '../../assets/About/Tribes/sumi.jpg'
import yimkhiung from '../../assets/About/Tribes/yimkhiung.jpg'
import zeliang from '../../assets/About/Tribes/zeliang.jpg'

const TribeCard = ({ image, title, desc, className }) => (
  <div className={`tribe-card ${className || ""}`}>
    <img src={image} alt={title} />
    <div className="tribe-overlay">
      <h3>{title}</h3>
      {desc && <p>{desc}</p>}
    </div>
  </div>
);


function Tribes() {
  return (
    <Layout>
     {/* HERO SECTION */}
          <section
            className="about-hero"
            style={{ backgroundImage: `url(${aboutHero})` }}
          >
            <div className="about-hero-overlay"></div>
    
            <div className="about-hero-content">
              <h1>Tribes</h1>
              <p>Explore the diverse tribal communities of Nagaland</p>
            </div>
          </section>
    
          {/* CONTENT BELOW */}
          <section className="about-content">
            <div className="about-content-inner">
            <p>
              The people of Nagaland mainly comprise the Tibeto-Burman tribal communities of the Naga tribes of the mountains and the Kuki and Dimasa tribes of the foothills. Some of the Naga tribes also inhabit the neighboring states of Arunachal Pradesh, Manipur as well as the Sagain state of Myanmar. During the colonial British era, the tribal territory of the Nagas was administered differently as the colonial masters avoided interference in tribal affairs. This led to the preservation of their tribal culture. Few of the Naga tribes had earlier practiced headhunting as war trophies, which was later banned in the 1970s. 
            </p>
            </div>
            <div className="about-map">
              <img
                src={mapImage}
                alt="Illustrated Map of Nagaland"
              />
            </div>

             <section className="tribes-section">
      <div className="tribes-grid">

        <TribeCard image={angami} title="Angami" desc="Known for their terraced wet-rice cultivation and strong village republics, the Angami tribe inhabits the Kohima region. They are celebrated for their warrior legacy, rich oral traditions, and vibrant festivals such as Sekrenyi." className="angami" />
        <TribeCard image={ao} title="Ao" className="ao" desc="The Ao tribe is known for early adoption of education and Christianity." />
        <TribeCard image={lotha} title="Lotha" className="lotha" desc="The Lotha tribe is known for skilled craftsmanship, agriculture, and distinct cultural practices." />

        <TribeCard image={konyak} title="Konyak" desc="Famed as the last of the tattooed headhunters, the Konyak tribe inhabits the Mon region. Their culture is marked by elaborate traditional attire, facial tattoos, and warrior pride." className="konyak" />
        <TribeCard image={sumi} title="Sumi" className="sumi" desc="known for its strong martial history , Residing mainly in Zunheboto district, they possess a rich tradition of folk songs, dances, and social customs rooted in clan identity." />
        <TribeCard image={chakhesang} title="Chakhesang" className="chakhesang" desc="An agrarian tribe inhabiting the southern regions of Nagaland, the Chakhesang are known for advanced farming techniques. Their culture emphasizes discipline." />

        <TribeCard image={phom} title="Phom" desc="The Phom tribe lives in the Longleng district and is admired for its vibrant textiles and traditional ornaments." className="phom" />
        <TribeCard image={rengma} title="Rengma" desc="The Rengma tribe is known for its artistic traditions." className="rengma" />

        <TribeCard image={yimkhiung} title="Yimkhiung" className="yimkhiung" desc="inhabits the eastern Tuensang region and is recognized for its rich oral history"/>
        <TribeCard image={sangtam} title="Sangtam" className="sangtam" desc="resides in the Kiphire and Tuensang districts and is known for resilience and adaptability." />
        <TribeCard image={khiamniungan} title="Khiamniungan" className="khiamniungan" desc="Living along the Indo-Myanmar border, the Khiamniungan tribe is known for distinctive attire"/>

        <TribeCard image={zeliang} title="Zeliang" className="zeliang" desc="They are deeply spiritual, with strong customary laws and festivals" />
        <TribeCard image={pochury} title="Pochury" className="pochury" desc="inhabits the Phek district and is known for graceful dances, folk music, and agricultural expertise." />
        <TribeCard image={chang} title="Chang" className="chang" desc="Their culture emphasizes clan unity, hospitality, and strong community values." />

      </div>
    </section>
          </section>
    </Layout>
  )
}

export default Tribes