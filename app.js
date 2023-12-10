// DEPENDENCIES
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

// CONTROLLERS
const userWishlistController = require("./controllers/userWishlistController");
const usersController = require("./controllers/userController");
const dashboardController = require("./controllers/dashboardController");
const notificationController = require("./controllers/notificationController");

// CONFIG
const app = express();

// MIDDLEWARE
app.use(morgan("dev")); // Log HTTP requests
app.use(express.json()); // Parse incoming JSON
app.use(cors("*")); // Enable Cross Origin Resource Sharing

// ROUTES
app.use("/userwishlist", userWishlistController);
app.use("/users", usersController);
app.use("/dashboard", dashboardController);
app.use("/notification", notificationController);
app.use("/", (req, res) => {
  console.log("Welcome to Giftune!");
  res.send("Welcome to Giftune!");
});
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;
