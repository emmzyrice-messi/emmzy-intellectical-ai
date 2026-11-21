const express = require("express");
const router = express.Router();

router.get("/questions", (req, res) => {
    res.json({
        success: true,
        message: "EMMZY JAMB CBT questions are ready."
    });
});

router.post("/submit", (req, res) => {
    const { answers } = req.body;

    if (!answers) {
        return res.status(400).json({
            success: false,
            message: "Please submit your answers."
        });
    }

    res.json({
        success: true,
        message: "Examination submitted successfully."
    });
});

module.exports = router;
