import { Link } from "react-router-dom";
import "./OrderSuccess.css";

export default function OrderSuccess() {
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
