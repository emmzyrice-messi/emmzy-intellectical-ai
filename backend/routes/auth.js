const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({
            success: false,
            message: "All fields are required."
        });
    }

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
