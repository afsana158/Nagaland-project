const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", async (req, res) => {
  try {
    console.log("QUERY:", req.query);

    const { category, search } = req.query;

    let sql = "SELECT * FROM products";
    let values = [];

    if (category) {
      sql += " WHERE category = ?";
      values.push(category);
    }

    if (search) {
      sql += category ? " AND" : " WHERE";
      sql += " name LIKE ?";
      values.push("%" + search + "%");
    }

    console.log("SQL:", sql);
    console.log("VALUES:", values);

    const [result] = await db.query(sql, values);

    console.log("RESULT:", result);

    res.json(result);

  } catch (err) {
    console.log("DB ERROR:", err);
    res.status(500).json({ error: "Database error" });
  }
});

module.exports = router;
