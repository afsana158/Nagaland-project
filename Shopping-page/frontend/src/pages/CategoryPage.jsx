import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { BASE_URL } from "../config";
import { useWishlist } from "../context/WishlistContext";
import { useProducts } from "../context/ProductContext";
import "./CategoryPage.css";

const categoryTitles = {
  jewellery: "JEWELLERY",
  souvenirs: "SOUVENIRS",
  handlooms: "HANDLOOMS",
  "naga-crafts": "NAGA CRAFTS",
};

export default function CategoryProducts() {
  const { category } = useParams();
  const { addToCart, updateQty, getCartItem } = useCart();
  const { searchQuery } = useProducts();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const url = new URL(`${BASE_URL}/api/products`);
    url.searchParams.append("category", category);

    if (searchQuery) {
      url.searchParams.append("search", searchQuery);
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [category, searchQuery]);

  return (
    <div className="category-page">
      <h1>{categoryTitles[category]}</h1>

      {loading ? (
        <p className="empty-category">Loading products...</p>
      ) : products.length === 0 ? (
        <p className="empty-category">No products found.</p>
      ) : (
        <div className="product-grid">
          {products.map((product) => {
            const cartItem = getCartItem(product.id);

            return (
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
                  <p className="p">₹{product.price}</p>

                  {cartItem ? (
                    <div className="qty-control">
                      <button onClick={() => updateQty(product.id, -1)}>
                        -
                      </button>
                      <span>{cartItem.quantity}</span>
                      <button onClick={() => updateQty(product.id, 1)}>
                        +
                      </button>
                    </div>
                  ) : (
                    <button onClick={() => addToCart(product)}>
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
