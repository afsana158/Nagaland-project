import { useCart } from "../context/CartContext.jsx";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cartItems, removeFromCart, updateQty } = useCart();

  console.log("Cart items:", cartItems);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const navigate = useNavigate();

  return (
    <div className="cart-page">
      <h1>YOUR CART</h1>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="cart-container">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.product_id}>
                <img
                  src={`http://localhost:5000/images/${item.image}`}
                  alt={item.name}
                />

                <div className="cart-info">
                  <h3>{item.name}</h3>
                  <p>₹{item.price}</p>

                  <div className="cart-qty">
                    <button onClick={() => updateQty(item.product_id, -1)}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQty(item.product_id, 1)}>
                      +
                    </button>
                  </div>
                </div>

                <div
                  className="cart-remove"
                  onClick={() => removeFromCart(item.product_id)}
                >
                  ✕
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <div className="summary-total">
              <span>Total</span>
              <span>₹{subtotal}</span>
            </div>

            <button
              onClick={() => navigate("/checkout")}
              className="checkout-btn"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
