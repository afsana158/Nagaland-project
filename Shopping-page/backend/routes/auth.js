const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../db");

const SECRET = "secret123";

// SIGNUP
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const hash = await bcrypt.hash(password, 10);

    await db.query(
      "INSERT INTO users (name,email,password) VALUES (?,?,?)",
      [name, email, hash]
    );

    res.json({ message: "Account created" });

  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: "User exists",
    });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password required",
      });
    }

    const [result] = await db.query(
      "SELECT * FROM users WHERE email=?",
      [email]
    );

    if (result.length === 0) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    const user = result[0];

    const valid = await bcrypt.compare(
      password,
      user.password
    );

    if (!valid) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      { id: user.id },
      SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });

  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Server error",
    });
  }
});

module.exports = router;
