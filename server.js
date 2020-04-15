const express = require("express");
const cors = require("cors");
require("dotenv/config");

const _port = process.env.HOST_PORT;
const _ip = process.env.HOST_IP;

// Starting App
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", require("./src/routes"));

app.listen(_port, _ip, () => console.log("Server is running..."));

module.exports = app;
