import "./Collections.css";
import img1 from "../assets/CandleStands.jpg";
import img2 from "../assets/BambooStorageContainer.avif";
import img3 from "../assets/NagaMask.webp";
import img4 from "../assets/Bananafiberbag.avif";

const products = [
  {
    id: 1,
    title: "Naga Kanya Candle Stand",
    price: "Rs. 18,750.00",
    image: img1,
  },
  {
    id: 2,
    title: "Bamboo Storage Container",
    price: "Rs. 3,500.00",
    image: img2,
  },
  {
    id: 3,
    title: "Naga Elongated Wooden Mask",
    price: "Rs. 18,750.00",
    image: img3,
  },
  {
    id: 4,
    title: "Banana Fiber Handwoven Bag",
    price: "Rs. 2,500.00",
    image: img4,
  },
];

export default function TimelessCollectibles() {
  return (
    <section className="collectibles-section">
      <h2 className="section-title">TIMELESS COLLECTIBLES</h2>

      <div className="product-grid">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            <div className="image-wrapper">
              <img src={item.image} alt={item.title} />
            </div>

            <h3>{item.title}</h3>
            <p className="brand">{item.brand}</p>
            <p className="price">{item.price}</p>
          </div>
        ))}
      </div>

      <button className="view-all-btn">VIEW ALL</button>
    </section>
  );
}
