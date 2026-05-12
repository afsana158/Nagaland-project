const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", (req, res) => {
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

  db.query(sql, values, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.json(result);
  });
});

router.get("/", (req, res) => {
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

  console.log(sql, values);

  db.query(sql, values, (err, result) => {
    if (err) {
      console.log("DB ERROR:", err);
      return res.status(500).json(err);
    }

    console.log("RESULT:", result);

    res.json(result);
  });
});

module.exports = router;