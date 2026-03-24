const express = require("express");
const router = express.Router();
const db = require("../db");

// GET CART ITEMS
router.get("/:email", (req, res) => {
  const email = req.params.email;

  const sql = `
    SELECT cart.*, products.name, products.price, products.image
    FROM cart
    JOIN products ON cart.product_id = products.id
    WHERE cart.user_email = ?
  `;

  db.query(sql, [email], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Database error" });
    }

    res.json(result);
  });
});

// ADD ITEM TO CART
router.post("/add", (req, res) => {
  const { email, productId, quantity } = req.body;

  const checkSql =
    "SELECT * FROM cart WHERE user_email = ? AND product_id = ?";

  db.query(checkSql, [email, productId], (err, result) => {
    if (err) return res.status(500).json(err);

    if (result.length > 0) {
      const updateSql =
        "UPDATE cart SET quantity = quantity + ? WHERE user_email = ? AND product_id = ?";

      db.query(updateSql, [quantity, email, productId], (err) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Cart updated" });
      });
    } else {
      const insertSql =
        "INSERT INTO cart (user_email, product_id, quantity) VALUES (?, ?, ?)";

      db.query(insertSql, [email, productId, quantity], (err) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Added to cart" });
      });
    }
  });
});

// delete item from cart
router.delete("/remove/:productId/:email", (req, res) => {
  const { productId, email } = req.params;

  const sql = "DELETE FROM cart WHERE product_id = ? AND user_email = ?";

  db.query(sql, [productId, email], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Item removed" });
  });
});

router.delete("/clear/:email", (req, res) => {
  const email = req.params.email;

  const sql = "DELETE FROM cart WHERE user_email = ?";

  db.query(sql, [email], (err) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "Cart cleared" });
  });
});

module.exports = router;