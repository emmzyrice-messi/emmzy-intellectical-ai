const express = require("express");
const router = express.Router();

router.post("/ask", async (req, res) => {
    try {
        const { question } = req.body;

        if (!question) {
            return res.status(400).json({
                success: false,
                message: "Please enter a question."
            });
        }

        res.json({
            success: true,
            message: "Question received. AI connection is coming next!"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong."
        });
    }
});

module.exports = router;
