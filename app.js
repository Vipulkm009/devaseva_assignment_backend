require('dotenv').config()

const express = require('express');
const app = express();
const mongoose = require("mongoose");


// Routes
const addRoute = require("./routes/addData");
const readRoute = require("./routes/readData");

// DB Connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("DB CONNECTED");
}).catch((reason) => {
    console.log("SOME ERROR");
    console.log(`${reason}`)
});

app.use(express.json());

// My routes
app.use("/api", addRoute);
app.use("/api", readRoute);

app.use((err, req, res, next) => {
    res.status(500).json({ error: err.message });
});

// PORT
const port = process.env.PORT || 8000;

// Starting Server
app.listen(port, () => {
    console.log(`App is running at ${port}`);
});

module.exports = app;