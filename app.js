// DEPENDENCIES
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

// CONTROLLERS

const friendsWishlistController = require("./controllers/friendswishlistController");

const usersController = require("./controllers/userController");
const dashboardController = require("./controllers/dashboardController");

// CONFIG
const app = express();

// MIDDLEWARE
app.use(morgan("dev")); // Log HTTP requests
app.use(express.json()); // Parse incoming JSON
app.use(cors("*")); // Enable Cross Origin Resource Sharing

// ROUTES
app.use("/friendsWishlist", friendsWishlistController);

app.get("/", (req, res) => {
  res.send("Giftune!");
});

app.get("*", (req, res) => {
  res.status(404).send("Page not found!");

  app.use("/users", usersController);
  app.use("/dashboard", dashboardController);
});

// EXPORT
module.exports = app;
