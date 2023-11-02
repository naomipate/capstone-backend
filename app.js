// DEPENDENCIES
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

// CONTROLLERS
const dashboardController = require("./controllers/dashboard/dashboard.controller");

// CONFIG
const app = express();

// MIDDLEWARE
app.use(morgan("dev")); // Log HTTP requests
app.use(express.json()); // Parse incoming JSON
app.use(cors("*")); // Enable Cross Origin Resource Sharing

// ROUTES
app.use("/profile", dashboardController);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// EXPORT
module.exports = app;
