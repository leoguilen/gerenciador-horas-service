const express = require('express');

// Starting App
const app = express();
app.use(express.json());

app.use('/api', require('./src/routes'));

app.listen(15520, () => console.log("Server is running..."));