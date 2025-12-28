import React from 'react'
import './../styles/FooterStyles.css'
import Logo from './../assets/nagalandLogo1.webp'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">

        {/* Column 1: Logo + Description */}
        <div className="footer-col">
          <img src={Logo} alt="Nagaland Tourism" className="footer-logo" />
          <p className="footer-desc">
            Discover the untouched beauty, culture, and traditions of Nagaland.Nestled in the Eastern Himalayas, Nagaland is known for its rolling hills and tribal heritage.
Every village tells a story of tradition, music, and timeless customs.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li>Saathi-Ministry of Tourism</li>
            <li>Nidhi-Ministry of Tourism</li>
            <li>Sexual Harrasment Electronic Box (SHE-Box)</li>
            <li>Sustainable and Responsible Tourism Tips</li>
            <li>SiteMap</li>
          </ul>
        </div>

        {/* Column 3: Contact + Social */}
        <div className="footer-col">
          <h4>Contact</h4>
          <p><i class="bi bi-envelope"></i>info@nagalandtourism.com</p>
          <p><i class="bi bi-telephone"></i>+91 XXXXX XXXXX</p>
          <h6>Follow Us</h6>
          <div className="footer-socials">
            <i className="bi bi-instagram"></i>
            <i className="bi bi-facebook"></i>
            <i className="bi bi-twitter-x"></i>
            <i className="bi bi-youtube"></i>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Nagaland Tourism. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer