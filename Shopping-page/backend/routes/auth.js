  const express = require("express");
  const router = express.Router();
  const bcrypt = require("bcrypt");
  const jwt = require("jsonwebtoken");
  const db = require("../db");

  const SECRET = "secret123";

  router.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;

    const hash = await bcrypt.hash(password, 10);

    db.query(
      "INSERT INTO users (name,email,password) VALUES (?,?,?)",
      [name, email, hash],
      (err) => {
        if (err) return res.status(400).json({ message: "User exists" });

        res.json({ message: "Account created" });
      }
    );
  });

  router.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    db.query(
      "SELECT * FROM users WHERE email=?",
      [email],
      async (err, result) => {

        if (err) {
          return res.status(500).json({ message: "Database error" });
        }

        if (!result || result.length === 0) {
          return res.status(401).json({ message: "Invalid credentials" });
        }

        const user = result[0];

        if (!user.password) {
          return res.status(500).json({ message: "Password not found in DB" });
        }

        const valid = await bcrypt.compare(password, user.password);

        if (!valid) { 
          return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ id: user.id }, SECRET, {
          expiresIn: "1d",
        });

        res.json({
          token,
          user: {
            id: user.id,
            name: user.name,
            email: user.email
          }
        });
      }
    );
  });

  module.exports = router;