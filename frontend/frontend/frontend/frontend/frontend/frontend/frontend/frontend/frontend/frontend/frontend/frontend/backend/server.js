const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("EMMZY INTELLECTICAL AI API is running!");
});

app.get("/api/status", (req, res) => {
    res.json({
        success: true,
        message: "EMMZY INTELLECTICAL AI is online"
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`EMMZY AI server running on port ${PORT}`);
});
