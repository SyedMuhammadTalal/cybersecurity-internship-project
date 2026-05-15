const express = require("express");
const helmet = require("helmet");

const app = express();

// 🔐 Security middleware (IMPORTANT)
app.use(helmet());

app.get("/", (req, res) => {
    res.send("Cybersecurity Internship Project is Running 🚀");
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});