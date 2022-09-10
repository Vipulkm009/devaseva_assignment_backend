require('dotenv').config()

const express = require('express');
const app = express();
const mongoose = require("mongoose");
const serverless = require("serverless-http");


// Routes
const addRoute = require("./routes/addData");

// DB Connection
// mongoose.connect(process.env.DATABASE, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => {
//     console.log("DB CONNECTED");
// }).catch((reason) => {
//     console.log("SOME ERROR");
//     console.log(`${reason}`)
// });

// My routes
app.use("/.netlify/functions/api", addRoute);

// PORT
// const port = process.env.PORT || 8000;

// Starting Server
// app.listen(port, () => {
//     console.log(`App is running at ${port}`);
// });

// module.exports = app;
module.exports.handler = serverless(app);