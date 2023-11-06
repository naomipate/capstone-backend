// DEPENDENCIES
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

// CONTROLLERS
<<<<<<< HEAD

const friendsWishlistController = require("./controllers/friendswishlistController");

=======
>>>>>>> a91556c70fde90ddc90fd6bbef00b96a10c30b38
const usersController = require("./controllers/userController");
const dashboardController = require("./controllers/dashboardController");

// CONFIG
const app = express();

// MIDDLEWARE
app.use(morgan("dev")); // Log HTTP requests
app.use(express.json()); // Parse incoming JSON
app.use(cors("*")); // Enable Cross Origin Resource Sharing

// ROUTES
app.use("/friendswishlist", friendsWishlistController);

app.get("/", (req, res) => {
<<<<<<< HEAD
  res.send("Giftune!");
});

app.get("*", (req, res) => {
  res.status(404).send("Page not found!");

  app.use("/users", usersController);
  app.use("/dashboard", dashboardController);
=======
    res.send("Welcome to Giftune!");
>>>>>>> a91556c70fde90ddc90fd6bbef00b96a10c30b38
});

app.get("*", (req, res) => {
    res.status(404).send("Page not found");
  });

// EXPORT
module.exports = app;
