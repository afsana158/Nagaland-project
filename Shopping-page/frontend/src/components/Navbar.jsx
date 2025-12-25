import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="ngl-header">
      {/* ----------------- TOP TAGLINE STRIP ----------------- */}
      <div className="ngl-top-strip">
        <div className="ngl-container">
          <span>Unique, Handcrafted Products from Nagaland</span>
          <span>Free Shipping on Orders Above ₹3000</span>
          <span>Crafted With Care by Artisans of Nagaland</span>
        </div>
      </div>

      {/* ----------------- FIRST SEPARATOR ----------------- */}
      <div className="ngl-separator"></div>

      {/* ----------------- MAIN NAVBAR ----------------- */}
      <nav className="ngl-main-nav">
        <div className="ngl-container ngl-nav-grid">
          {/* LEFT MENU */}
          <ul className="ngl-left-menu">
            <li className="active">HOME</li>
            <li>SHOP ▾</li>
            <li>GIFTING ▾</li>
            <li>ABOUT ▾</li>
          </ul>

          {/* CENTER LOGO */}
          <div className="ngl-logo">NAGACRAFTS</div>

          {/* RIGHT ICONS */}
          <ul className="ngl-right-icons">
            <li>👤</li>
            <li>♡</li>
            <li>🛒</li>
            <li>🔍</li>
          </ul>
        </div>
      </nav>

      {/* ----------------- SECOND SEPARATOR ----------------- */}
      <div className="ngl-separator"></div>
    </header>
  );
}
