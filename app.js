// DEPENDENCIES
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

// CONTROLLERS
const usersController = require("./controllers/usersController");
const dashboardController = require("./controllers/dashboardController");

// CONFIG
const app = express();

// MIDDLEWARE
app.use(morgan("dev")); // Log HTTP requests
app.use(express.json()); // Parse incoming JSON
app.use(cors("*")); // Enable Cross Origin Resource Sharing

// ROUTES
app.use("/users", usersController);
app.use("/dashboard", dashboardController);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// EXPORT
module.exports = app;
