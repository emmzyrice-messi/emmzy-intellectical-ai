const express = require("express");
const router = express.Router();

router.post("/initialize", (req, res) => {
    const { email, plan } = req.body;

    if (!email || !plan) {
        return res.status(400).json({
            success: false,
            message: "Email and plan are required."
        });
    }

    res.json({
        success: true,
        message: "Payment route is ready for Paystack integration."
    });
});

module.exports = router;
