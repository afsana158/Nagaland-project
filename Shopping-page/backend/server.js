const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/images", express.static("images"));

app.use("/api/products", require("./routes/products"));
app.use("/api/orders", require("./routes/order"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/auth", require("./routes/googleauth"));
app.use("/api/cart", require("./routes/cart"));
app.use("/api/wishlist", require("./routes/wishlist"));
app.use("/api/payment", require("./routes/payment"));

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
