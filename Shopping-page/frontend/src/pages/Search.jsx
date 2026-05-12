import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { BASE_URL } from "../config";

import "./CategoryPage.css"; // reuse same styles

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!query) return;

    setLoading(true);
    fetch(`${BASE_URL}/api/products?search=${query}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [query]);

  return (
    <div className="category-page">
      <h1>Search Results for “{query}”</h1>

      {loading ? (
        <p className="empty-category">Searching…</p>
      ) : products.length === 0 ? (
        <p className="empty-category">No products found.</p>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="wishlist-icon">
                {isInWishlist(product.id) ? (
                  <FaHeart
                    className="heart-icon active"
                    onClick={() => removeFromWishlist(product.id)}
                  />
                ) : (
                  <FiHeart
                    className="heart-icon"
                    onClick={() => addToWishlist(product)}
                  />
                )}
              </div>

              <img
                src={`${BASE_URL}/images/${product.image}`}
                alt={product.name}
              />

              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="price">₹{product.price}</p>

                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
