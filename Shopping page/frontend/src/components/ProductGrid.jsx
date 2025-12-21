import "./ProductGrid.css";

export default function ProductGrid() {
  const products = [
    {
      name: "Handwoven Naga Shawl",
      price: 2199,
      img: "/assets/sample-products/shawl.jpg",
    },
    {
      name: "Bamboo Basket",
      price: 899,
      img: "/assets/sample-products/basket.jpg",
    },
    {
      name: "Tribal Necklace",
      price: 1299,
      img: "/assets/sample-products/jewelry.jpg",
    },
    {
      name: "Black Pottery Bowl",
      price: 799,
      img: "/assets/sample-products/pottery.jpg",
    },
  ];

  return (
    <div className="product-section">
      <h2>Featured Products</h2>

      <div className="grid">
        {products.map((p, i) => (
          <div className="product-card" key={i}>
            <img src={p.img} />
            <h3>{p.name}</h3>
            <p>₹ {p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
