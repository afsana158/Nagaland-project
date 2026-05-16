const express = require("express");
const router = express.Router();
const db = require("../db");

// GET wishlist items
router.get("/:email", async (req, res) => {
  try {
    const email = req.params.email;

    const sql = `
      SELECT wishlist.*, products.name, products.price, products.image
      FROM wishlist
      JOIN products ON wishlist.product_id = products.id
      WHERE wishlist.user_email = ?
    `;

    const [result] = await db.query(sql, [email]);

    res.json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
});

// ADD to wishlist
router.post("/add", async (req, res) => {
  try {
    const { email, productId } = req.body;

    const checkSql =
      "SELECT * FROM wishlist WHERE user_email = ? AND product_id = ?";

    const [result] = await db.query(checkSql, [email, productId]);

    if (result.length > 0) {
      return res.json({ message: "Already in wishlist" });
    }

    const insertSql =
      "INSERT INTO wishlist (user_email, product_id) VALUES (?, ?)";

    await db.query(insertSql, [email, productId]);

    res.json({ message: "Added to wishlist" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
});

// REMOVE from wishlist
router.delete("/remove/:productId/:email", async (req, res) => {
  try {
    const { productId, email } = req.params;

    const sql =
      "DELETE FROM wishlist WHERE product_id = ? AND user_email = ?";

    await db.query(sql, [productId, email]);

    res.json({ message: "Removed from wishlist" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
});

module.exports = router;
