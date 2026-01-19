import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useProducts } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";
import { categories } from "../data/categories";
import { FiUser, FiHeart, FiShoppingCart, FiSearch } from "react-icons/fi";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [hideNav, setHideNav] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { searchQuery, setSearchQuery } = useProducts();
  const navigate = useNavigate();

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  useEffect(() => {
    const handleScroll = () => {
      setHideNav(window.scrollY > 500); // hide after 500px
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
            <li>
              {" "}
              <Link to="/">HOME</Link>
            </li>

            <li className="shop-menu" onClick={() => toggleMenu("shop")}>
              <span className="shop-label">SHOP BY CATEGORY</span>

              <span
                className={`ngl-arrow ${openMenu === "shop" ? "open" : ""}`}
              >
                ▾
              </span>

              {openMenu === "shop" && (
                <ul
                  className="dropdown-menu"
                  onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
                >
                  {categories.map((cat) => (
                    <li
                      key={cat.slug}
                      onClick={() => {
                        navigate(`/shop/${cat.slug}`);
                        setOpenMenu(null);
                      }}
                      className="dropdown-item"
                    >
                      {cat.name}
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li onClick={() => toggleMenu("about")}>
              <Link to="/about">ABOUT</Link>
            </li>
          </ul>

          {/* CENTER LOGO */}
          <div className="ngl-logo">NAGACRAFTS</div>

          {/* RIGHT ICONS */}
          <ul className="ngl-right-icons">
            <li>
              <Link to="/auth">
                <FiUser />
              </Link>
            </li>
            <li>
              <Link to="/wishlist">
                <FiHeart />
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <FiShoppingCart />
              </Link>
            </li>
            <li onClick={() => setShowSearch(!showSearch)}>
              <FiSearch />
            </li>
          </ul>
          {showSearch && (
            <div className="search-box">
              <input
                type="text"
                placeholder="Search jewellery, handlooms, crafts..."
                value={searchQuery}
                onChange={(e) => {
                  const value = e.target.value;
                  setSearchQuery(value);

                  if (value.trim()) {
                    navigate(`/search?q=${encodeURIComponent(value)}`);
                  }
                }}
              />
            </div>
          )}
        </div>
      </nav>

      <div className="ngl-separator"></div>
    </header>
  );
}
