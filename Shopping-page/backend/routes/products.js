const express = require("express");
const router = express.Router();
const products = require("../data/products");

// GET /api/products
// GET /api/products?category=jewellery
router.get("/", (req, res) => {
  const { category, search } = req.query;
  let filtered = products;

  if (category) {
    filtered =filtered.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );
    return res.json(filtered);
  }

  if (search) {
    filtered = filtered.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  res.json(filtered);
});

module.exports = router;
