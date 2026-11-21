const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
    res.json({
        success: true,
        message: "Registration route is ready."
    });
});

router.post("/login", (req, res) => {
    res.json({
        success: true,
        message: "Login route is ready."
    });
});

module.exports = router;
