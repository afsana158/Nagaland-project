import React from 'react'
import Layout from './../../components/Layout.jsx'
import './../../styles/ExploreStyles.css'
import aboutHero from './../../assets/Explore/Adventure/hero.webp'

function Adventure() {
  return (
    <Layout>
    {/* HERO */}
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${aboutHero})` }}
      >
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <h1>Adventures</h1>
          <p>Explore the natural and cultural heart of Nagaland</p>
        </div>
      </section>
    </Layout>
  )
}

export default Adventure