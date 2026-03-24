const express = require("express");
const router = express.Router();
const db = require("../db");

/* SAVE ORDER */
router.post("/", (req, res) => {
  const { email, items, total, paymentId } = req.body;

  const sql =
    "INSERT INTO orders (user_email, items, total, payment_id) VALUES (?, ?, ?, ?)";

  db.query(
    sql,
    [email, JSON.stringify(items), total, paymentId],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: "Order save failed" });
      }

      res.json({ message: "Order saved" });
    }
  );
});

// GET user orders
router.get("/:email", (req, res) => {
  const email = req.params.email;

  const sql = "SELECT * FROM orders WHERE user_email = ? ORDER BY created_at DESC";

  db.query(sql, [email], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "Server error" });
    }

    res.json(result);
  });
});

module.exports = router;