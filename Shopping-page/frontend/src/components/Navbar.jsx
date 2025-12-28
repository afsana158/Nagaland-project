import { useState, useEffect } from "react";
import "./Navbar.css";
import { FiUser, FiHeart, FiShoppingCart, FiSearch } from "react-icons/fi";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [hideNav, setHideNav] = useState(false);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  useEffect(() => {
    const handleScroll = () => {
      setHideNav(window.scrollY > 80); // hide after 50px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`ngl-header ${hideNav ? "hide" : ""}`}>
      {/* ----------------- TOP TAGLINE STRIP ----------------- */}
      <div className="ngl-top-strip">
        <div className="ngl-container">
          <span>Unique, Handcrafted Products from Nagaland</span>
          <span>Free Shipping on Orders Above ₹3000</span>
          <span>Crafted With Care by Artisans of Nagaland</span>
        </div>
      </div>

      <div className="ngl-separator"></div>

      {/* ----------------- MAIN NAVBAR ----------------- */}
      <nav className="ngl-main-nav">
        <div className="ngl-container ngl-nav-grid">
          {/* LEFT MENU */}
          <ul className="ngl-left-menu">
            <li>HOME</li>

            <li onClick={() => toggleMenu("shop")}>
              SHOP
              <span
                className={`ngl-arrow ${openMenu === "shop" ? "open" : ""}`}
              >
                ▾
              </span>
            </li>

            <li onClick={() => toggleMenu("gifting")}>
              GIFTING
              <span
                className={`ngl-arrow ${openMenu === "gifting" ? "open" : ""}`}
              >
                ▾
              </span>
            </li>

            <li onClick={() => toggleMenu("about")}>
              ABOUT
              <span
                className={`ngl-arrow ${openMenu === "about" ? "open" : ""}`}
              >
                ▾
              </span>
            </li>
          </ul>

          {/* CENTER LOGO */}
          <div className="ngl-logo">NAGACRAFTS</div>

          {/* RIGHT ICONS */}
          <ul className="ngl-right-icons">
            <li>
              <FiUser />
            </li>
            <li>
              <FiHeart />
            </li>
            <li>
              <FiShoppingCart />
            </li>
            <li>
              <FiSearch />
            </li>
          </ul>
        </div>
      </nav>

      <div className="ngl-separator"></div>
    </header>
  );
}
