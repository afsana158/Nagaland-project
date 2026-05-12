import { useEffect, useState } from "react";
import axios from "axios";
import "./Profile.css";
import { BASE_URL } from "../config";

export default function Profile() {
  const [orders, setOrders] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) return;

    axios
      .get(`${BASE_URL}/api/orders/${user.email}`)
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch orders:", err);
      });
  }, [user]);

  return (
    <div className="profile-page">
      <h1 className="orders-title">YOUR ORDERS</h1>

      {orders.length === 0 && (
        <p className="no-orders">No orders placed yet.</p>
      )}

      {orders.map((order) => {
        const items =
          typeof order.items === "string"
            ? JSON.parse(order.items)
            : order.items;

        return (
          <div key={order.id} className="order-card">
            <div className="order-header">
              <h3>Order #{order.id}</h3>
              <span className="order-total">₹{order.total}</span>
            </div>

            <div className="order-items">
              {items.map((item) => (
                <div key={item.product_id} className="order-item">
                  <span className="item-name">{item.name}</span>
                  <span className="item-qty">× {item.quantity}</span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
