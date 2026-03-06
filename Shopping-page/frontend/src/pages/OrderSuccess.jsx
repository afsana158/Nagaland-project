import { Link } from "react-router-dom";
import "./OrderSuccess.css";
import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function OrderSuccess() {
  useEffect(() => {
    const duration = 2000;
    const animationEnd = Date.now() + duration;

    const interval = setInterval(() => {
      if (Date.now() > animationEnd) {
        return clearInterval(interval);
      }

      confetti({
        particleCount: 6,
        spread: 70,
        origin: { y: 0.6 },
      });
    }, 200);
  }, []);

  return (
    <div className="success-page">
      <div className="success-card">
        <div className="success-icon">✔</div>

        <h1>Payment Successful</h1>

        <p>
          Thank you for shopping with <span>Nagacrafts</span>. Your handcrafted
          items are being prepared for shipment.
        </p>

        <div className="success-buttons">
          <Link to="/profile">
            <button className="success-btn">View Orders</button>
          </Link>

          <Link to="/">
            <button className="success-btn2">Continue Shopping</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
