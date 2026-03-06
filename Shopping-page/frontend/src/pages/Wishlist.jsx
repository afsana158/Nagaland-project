import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import "./Wishlist.css";

export default function Wishlist() {
  const { wishlist = [], removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <div className="wishlist-page">
      <h1>YOUR WISHLIST</h1>

      {wishlist.length === 0 ? (
        <p className="empty-wishlist">Your wishlist is empty.</p>
      ) : (
        <div className="wishlist-grid">
          {wishlist.map((item) => (
            <div className="wishlist-card" key={item.product_id || item.id}>
              <img
                src={`http://localhost:5000/images/${item.image}`}
                alt={item.name}
              />

              <div className="wishlist-info">
                <h3>{item.name}</h3>
                <p className="wishlist-price">₹{item.price}</p>
              </div>

              <div className="wishlist-actions">
                <button
                  className="wishlist-cart-btn"
                  onClick={() => {
                    addToCart(item);
                    removeFromWishlist(item.product_id || item.id);
                  }}
                >
                  Move to Cart
                </button>

                <button
                  className="wishlist-remove-btn"
                  onClick={() => removeFromWishlist(item.product_id || item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
