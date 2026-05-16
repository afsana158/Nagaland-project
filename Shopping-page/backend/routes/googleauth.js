const express = require("express");
const router = express.Router();
const { OAuth2Client } = require("google-auth-library");
const jwt = require("jsonwebtoken");
const db = require("../db");

const CLIENT_ID = "446916475153-648d3c008ov6qhdjg2rblpc58jmhls24.apps.googleusercontent.com";
const SECRET = "secret123";

const client = new OAuth2Client(CLIENT_ID);

router.post("/google", async (req, res) => {
  const { token } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID,
    });

    const payload = ticket.getPayload();

    const { email, name } = payload;

    const [result] = await db.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if (result.length === 0) {
      await db.query(
        "INSERT INTO users (name, email) VALUES (?, ?)",
        [name, email]
      );
    }

    const authToken = jwt.sign({ email }, SECRET, {
      expiresIn: "1d",
    });

    res.json({
      token: authToken,
      user: { name, email },
    });

  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: "Google authentication failed",
    });
  }
});

module.exports = router;
