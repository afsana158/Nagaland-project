import React from 'react'
import { Carousel } from 'react-bootstrap'
import img1 from './../../assets/section3/pic1.webp'
import img2 from './../../assets/section3/pic2.jpg'  
import img3 from './../../assets/section3/pic3.jpg'
import img4 from './../../assets/section3/pic4.jpg'

function Section3() {
  return (
     <section className="section3">
      <Carousel fade controls indicators interval={8000}>
        <Carousel.Item>
          <div
            className="section3-slide"
            style={{ backgroundImage: `url(${img4})` }}
          >
            <div className="section3-overlay" />

            <div className="section3-text">
              <span className="slide-subtitle">Glide into</span>
              <h1>Nagaland’s major water systems</h1>
              <p>Tizu River Wetlands • Hidden</p>
              <button className="slide-btn">Explore Now</button>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="section3-slide"
            style={{ backgroundImage: `url(${img1})` }}
          >
            <div className="section3-overlay" />

            <div className="section3-text">
              <span className="slide-subtitle">Discover</span>
              <h1>Highest Peak of Nagaland</h1>
              <p>Mount Saramati • Nature & Adventure</p>
              <button className="slide-btn">Explore Now</button>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="section3-slide"
            style={{ backgroundImage: `url(${img2})` }}
          >
            <div className="section3-overlay" />
            <div className="section3-text">
              <span className="slide-subtitle">Experience the</span>
              <h1>Valley of flowers</h1>
              <p>Japfu Peak & Dzüko Rhododendrons </p>
              <button className="slide-btn">Explore Now</button>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="section3-slide"
            style={{ backgroundImage: `url(${img3})` }}
          >
            <div className="section3-overlay" />

            <div className="section3-text">
              <span className="slide-subtitle">Visit the</span>
              <h1>Asia’s First Green Village</h1>
              <p>Khonoma Village • Angami Naga heritage</p>
              <button className="slide-btn">Explore Now</button>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  )
}

export default Section3