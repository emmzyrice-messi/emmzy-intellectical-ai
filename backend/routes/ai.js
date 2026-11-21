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

        if (!process.env.AI_API_KEY) {
            return res.status(500).json({
                success: false,
                message: "AI API key is not configured."
            });
        }

        const response = await fetch(
            "https://api.groq.com/openai/v1/chat/completions",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${process.env.AI_API_KEY}`
                },
                body: JSON.stringify({
                    model: "llama-3.3-70b-versatile",
                    messages: [
                        {
                            role: "system",
                            content: "You are EMMZY INTELLECTICAL AI, an expert JAMB tutor. Teach English, Mathematics, Physics, Chemistry and Biology with clear explanations."
                        },
                        {
                            role: "user",
                            content: question
                        }
                    ]
                })
            }
        );

        const data = await response.json();

        if (!response.ok) {
            return res.status(502).json({
                success: false,
                message: "AI service error."
            });
        }

        res.json({
            success: true,
            answer: data.choices[0].message.content
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong."
        });
    }
});

module.exports = router;
