const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const aiRoutes = require("./routes/ai");
const authRoutes = require("./routes/auth");
const cbtRoutes = require("./routes/cbt");
const paymentRoutes = require("./routes/payment");

app.use("/api/ai", aiRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/cbt", cbtRoutes);
app.use("/api/payment", paymentRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to EMMZY INTELLECTICAL AI!");
});

app.get("/api/status", (req, res) => {
    res.json({
        success: true,
        message: "EMMZY INTELLECTICAL AI is online!"
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`EMMZY AI running on port ${PORT}`);
});
