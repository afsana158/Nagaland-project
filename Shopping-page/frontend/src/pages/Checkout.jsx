import { useCart } from "../context/CartContext";
import axios from "axios";
import "./Checkout.css";
import { BASE_URL } from "../config";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cartItems, clearCart } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const Navigate = useNavigate();

  const handlePayment = async () => {
    try {
      const res = await axios.post(
        `${BASE_URL}/api/payment/create-order`,
        { amount: total },
      );

      const options = {
        key: "rzp_test_SNdhhw6OxCVz2F",
        amount: res.data.amount,
        currency: "INR",
        order_id: res.data.id,

        name: "Nagacrafts",
        description: "Order Payment",

        handler: async function (response) {
          console.log("Payment successful", response);
          const user = JSON.parse(localStorage.getItem("user"));
          await axios.post(`${BASE_URL}/api/orders`, {
            email: user.email,
            items: cartItems,
            amount: total,
            paymentId: response.razorpay_payment_id,
          });

          await axios.delete(
            `${BASE_URL}/api/cart/clear/${user.email}`,
          );

          // Clear cart after successful order
          await clearCart();

          Navigate("/order-success");
        },

        theme: {
          color: "#eab308",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="checkout-page">
      <h1 className="checkout-title">Checkout</h1>

      <div className="checkout-container">
        {/* LEFT SIDE */}
        <div className="checkout-left">
          <div className="checkout-section">
            <h2>Shipping Address</h2>

            <input placeholder="Full Name" />
            <input placeholder="Phone Number" />
            <input placeholder="Address Line" />
            <input placeholder="City" />
            <input placeholder="State" />
            <input placeholder="Pincode" />
          </div>

          <div className="checkout-section">
            <h2>Payment Method</h2>

            <p className="upi-text">
              Pay securely using UPI, Google Pay, Paytm, or Cards
            </p>

            <button className="upi-btn" onClick={handlePayment}>
              Pay ₹{total}
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="checkout-right">
          <h2>Order Summary</h2>

          {cartItems.map((item) => (
            <div className="summary-item" key={item.product_id}>
              <img
                src={`${BASE_URL}/images/${item.image}`}
                alt={item.name}
              />

              <div>
                <p>{item.name}</p>
                <span>
                  ₹{item.price} × {item.quantity}
                </span>
              </div>
            </div>
          ))}

          <div className="summary-total">
            <span>Total</span>
            <span>₹{total}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
