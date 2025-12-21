import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="mgh-header">
      {/* ----------------- TOP TAGLINE STRIP ----------------- */}
      <div className="mgh-top-strip">
        <span>Unique, Handcrafted Products from Nagaland</span>
        <span>Free Shipping on Orders Above ₹3000</span>
        <span>Crafted With Care by Artisans of Nagaland</span>
      </div>

      {/* ----------------- FIRST SEPARATOR ----------------- */}
      <div className="mgh-separator"></div>

      {/* ----------------- MAIN NAVBAR ----------------- */}
      <nav className="mgh-main-nav">
        {/* LEFT MENU */}
        <ul className="mgh-left-menu">
          <li className="active">HOME</li>
          <li>SHOP ▾</li>
          <li>GIFTING ▾</li>
          <li>ABOUT ▾</li>
          <li>ODOP</li>
        </ul>

        {/* CENTER LOGO */}
        <div className="mgh-logo">NAGACRAFTS</div>

        {/* RIGHT ICONS */}
        <ul className="mgh-right-icons">
          <li>👤</li>
          <li>♡</li>
          <li>🛒</li>
          <li>🔍</li>
        </ul>
      </nav>

      {/* ----------------- SECOND SEPARATOR ----------------- */}
      <div className="mgh-separator"></div>
    </header>
  );
}
