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

  // get logged in user
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkUser = () => {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      setUser(storedUser);
    };

    checkUser();

    window.addEventListener("storage", checkUser);

    return () => window.removeEventListener("storage", checkUser);
  }, []);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  useEffect(() => {
    const handleScroll = () => {
      setHideNav(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`ngl-header ${hideNav ? "hide" : ""}`}>
      {/* TOP STRIP */}
      <div className="ngl-top-strip">
        <div className="ngl-container">
          <span>Unique, Handcrafted Products from Nagaland</span>
          <span>Free Shipping on Orders Above ₹3000</span>
          <span>Crafted With Care by Artisans of Nagaland</span>
        </div>
      </div>

      <div className="ngl-separator"></div>

      {/* MAIN NAVBAR */}
      <nav className="ngl-main-nav">
        <div className="ngl-container ngl-nav-grid">
          {/* LEFT MENU */}
          <ul className="ngl-left-menu">
            <li>
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
                  onClick={(e) => e.stopPropagation()}
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

            <li>
              <Link to="/about">ABOUT</Link>
            </li>
          </ul>

          {/* CENTER LOGO */}
          <div className="ngl-logo">NAGACRAFTS</div>

          {/* RIGHT ICONS */}
          <ul className="ngl-right-icons">
            {/* USER */}
            <li className="user-menu">
              {user ? (
                <>
                  <div
                    className="user-trigger"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMenu("user");
                    }}
                  >
                    <span className="shop-label">
                      Hi, {user.name.split(" ")[0]}
                    </span>

                    <span
                      className={`ngl-arrow ${openMenu === "user" ? "open" : ""}`}
                    >
                      ▾
                    </span>
                  </div>

                  {openMenu === "user" && (
                    <ul
                      className="dropdown-menu"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <li
                        onClick={() => {
                          navigate("/profile");
                          setOpenMenu(null);
                        }}
                      >
                        Profile
                      </li>

                      <li onClick={handleLogout}>Logout</li>
                    </ul>
                  )}
                </>
              ) : (
                <Link to="/auth">
                  <FiUser />
                </Link>
              )}
            </li>

            {/* WISHLIST */}
            <li>
              <Link to="/wishlist">
                <FiHeart />
              </Link>
            </li>

            {/* CART */}
            <li>
              <Link to="/cart">
                <FiShoppingCart />
              </Link>
            </li>

            {/* SEARCH */}
            <li onClick={() => setShowSearch(!showSearch)}>
              <FiSearch />
            </li>
          </ul>

          {/* SEARCH BOX */}
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
