const express = require("express");

const server = express();

server.get("/", (req, res) => {
    console.log("request received");
    return res
    .status(200)
    .json(req.headers);
});

server.listen(3000, () => {
    console.log(`Server running on port 3000`);
});