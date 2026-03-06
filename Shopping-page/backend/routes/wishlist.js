const express = require("express");
const router = express.Router();
const db = require("../db");

// GET wishlist items
router.get("/:email", (req, res) => {
  const email = req.params.email;

  const sql = `
    SELECT wishlist.*, products.name, products.price, products.image
    FROM wishlist
    JOIN products ON wishlist.product_id = products.id
    WHERE wishlist.user_email = ?
  `;

  db.query(sql, [email], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Database error" });
    }
    res.json(result);
  });
});

// ADD to wishlist
router.post("/add", (req, res) => {
  const { email, productId } = req.body;

  const checkSql =
    "SELECT * FROM wishlist WHERE user_email = ? AND product_id = ?";

  db.query(checkSql, [email, productId], (err, result) => {
    if (err) return res.status(500).json(err);

    if (result.length > 0) {
      return res.json({ message: "Already in wishlist" });
    }

    const insertSql =
      "INSERT INTO wishlist (user_email, product_id) VALUES (?, ?)";

    db.query(insertSql, [email, productId], (err) => {
      if (err) return res.status(500).json(err);

      res.json({ message: "Added to wishlist" });
    });
  });
});

// REMOVE from wishlist
router.delete("/remove/:productId/:email", (req, res) => {
  const { productId, email } = req.params;

  const sql =
    "DELETE FROM wishlist WHERE product_id = ? AND user_email = ?";

  db.query(sql, [productId, email], (err) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "Removed from wishlist" });
  });
});

module.exports = router;    