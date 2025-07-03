const express = require("express");
const app = express();
const port = 3000;

app.get("/api/download", (req, res) => {
    const videoUrl = req.query.url;
    if (!videoUrl) {
        return res.status(400).send("No URL provided.");
    }
    res.send("Pretending to download video from: " + videoUrl);
});

module.exports = app;