const express = require("express");
const router = express.Router();
const Razorpay = require("razorpay");

const razorpay = new Razorpay({
  key_id: "rzp_test_SNdhhw6OxCVz2F",
  key_secret: "LgoX10Y22dYUDyCf4tGaNgEp",
});

router.post("/create-order", async (req, res) => {
  try {
    const { amount } = req.body;

    const order = await razorpay.orders.create({
      amount: amount * 100,
      currency: "INR",
    });

    res.json(order);

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Order creation failed" });
  }
});

module.exports = router;