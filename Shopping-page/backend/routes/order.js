const express = require("express");
const router = express.Router();
const db = require("../db");

/* SAVE ORDER */
router.post("/", async (req, res) => {
  try {
    const { email, items, total, paymentId } = req.body;

    const sql =
      "INSERT INTO orders (user_email, items, total, payment_id) VALUES (?, ?, ?, ?)";

    await db.query(sql, [
      email,
      JSON.stringify(items),
      total,
      paymentId,
    ]);

    res.json({ message: "Order saved" });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Order save failed" });
  }
});

// GET USER ORDERS
router.get("/:email", async (req, res) => {
  try {
    const email = req.params.email;

    const sql =
      "SELECT * FROM orders WHERE user_email = ? ORDER BY created_at DESC";

    const [result] = await db.query(sql, [email]);

    res.json(result);

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
