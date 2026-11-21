require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Import routes
const aiRoutes = require("./routes/ai");
const authRoutes = require("./routes/auth");
const cbtRoutes = require("./routes/cbt");
const paymentRoutes = require("./routes/payment");

// Connect routes
app.use("/api/ai", aiRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/cbt", cbtRoutes);
app.use("/api/payments", paymentRoutes);

// Homepage
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Welcome to EMMZY INTELLECTICAL AI!",
        platform: "JAMB AI Tutor and CBT"
    });
});

// Health check
app.get("/health", (req, res) => {
    res.json({
        success: true,
        message: "EMMZY INTELLECTICAL AI server is running."
    });
});

// Error handling
app.use((err, req, res, next) => {
    console.error(err);

    res.status(500).json({
        success: false,
        message: "Something went wrong."
    });
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(
        `EMMZY INTELLECTICAL AI running on port ${PORT}`
    );
});
