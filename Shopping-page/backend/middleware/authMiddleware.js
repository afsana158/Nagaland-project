const jwt = require("jsonwebtoken");

const SECRET = process.env.JWT_SECRET;

function authMiddleware(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Not authorized" });
  }

  try {
    const verified = jwt.verify(token, SECRET);
    req.user = verified;
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
}

module.exports = authMiddleware;