const express = require("express");
const cors = require("cors");
require("dotenv/config");

const _port = process.env.PORT || 15520;

// Starting App
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", require("./src/routes"));

app.listen(_port, () => console.log("Server is running..."));

module.exports = app;
