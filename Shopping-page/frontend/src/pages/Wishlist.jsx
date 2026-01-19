import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import "./Wishlist.css";

export default function Wishlist() {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <div className="wishlist-page">
      <h1>YOUR WISHLIST</h1>

      {wishlistItems.length === 0 ? (
        <p className="empty-wishlist">Your wishlist is empty.</p>
      ) : (
        <div className="wishlist-grid">
          {wishlistItems.map((item) => (
            <div className="wishlist-card" key={item.id}>
              <img
                src={`http://localhost:5000/images/${item.image}`}
                alt={item.name}
              />

              <h3>{item.name}</h3>
              <p>₹{item.price}</p>

              <button
                className="wishlist-cart-btn"
                onClick={() => {
                  addToCart(item);
                  removeFromWishlist(item.id);
                }}
              >
                Move to Cart
              </button>

              <button
                className="wishlist-remove-btn"
                onClick={() => removeFromWishlist(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
