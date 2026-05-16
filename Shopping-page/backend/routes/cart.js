const express = require("express");
const router = express.Router();
const db = require("../db");

// GET CART ITEMS
router.get("/:email", async (req, res) => {
  try {
    const email = req.params.email;

    const sql = `
      SELECT cart.*, products.name, products.price, products.image
      FROM cart
      JOIN products ON cart.product_id = products.id
      WHERE cart.user_email = ?
    `;

    const [result] = await db.query(sql, [email]);

    res.json(result);

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
});

// ADD TO CART
router.post("/add", async (req, res) => {
  try {
    const { email, productId, quantity } = req.body;

    const checkSql =
      "SELECT * FROM cart WHERE user_email = ? AND product_id = ?";

    const [result] = await db.query(checkSql, [
      email,
      productId,
    ]);

    if (result.length > 0) {
      const updateSql =
        "UPDATE cart SET quantity = quantity + ? WHERE user_email = ? AND product_id = ?";

      await db.query(updateSql, [
        quantity,
        email,
        productId,
      ]);

      return res.json({ message: "Cart updated" });
    }

    const insertSql =
      "INSERT INTO cart (user_email, product_id, quantity) VALUES (?, ?, ?)";

    await db.query(insertSql, [
      email,
      productId,
      quantity,
    ]);

    res.json({ message: "Added to cart" });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
});

// REMOVE ITEM
router.delete("/remove/:productId/:email", async (req, res) => {
  try {
    const { productId, email } = req.params;

    const sql =
      "DELETE FROM cart WHERE product_id = ? AND user_email = ?";

    await db.query(sql, [productId, email]);

    res.json({ message: "Item removed" });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
});

// CLEAR CART
router.delete("/clear/:email", async (req, res) => {
  try {
    const email = req.params.email;

    await db.query(
      "DELETE FROM cart WHERE user_email = ?",
      [email]
    );

    res.json({ message: "Cart cleared" });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
});

module.exports = router;
