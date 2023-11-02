// DEPENDENCIES
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

// CONTROLLERS
const friendsWishlistController = require("./controllers/friendsWishlistController");
// const { getFriendsWishlist } = require("./queries/friendsWishlists");

// CONFIG
const app = express();

// MIDDLEWARE
app.use(morgan("dev")); // Log HTTP requests
app.use(express.json()); // Parse incoming JSON
app.use(cors()); // Enable Cross Origin Resource Sharing

// ROUTES
app.use("/friendsWishlist", friendsWishlistController);
// app.use("/example", exampleController);

app.get("/", (req, res) => {
  res.send("Giftune!");
});

app.get("*", (req, res) => {
  res.status(404).send("Page not found!");
});

// EXPORT
module.exports = app;
