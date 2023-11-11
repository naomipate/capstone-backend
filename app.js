// DEPENDENCIES
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

// CONTROLLERS
const userWishlistController = require("./controllers/userWishlistController");
const usersController = require("./controllers/userController");
// const friendsWishlistController = require("./controllers/friendsWishlistController");
const dashboardController = require("./controllers/dashboardController");

// CONFIG
const app = express();

// MIDDLEWARE
app.use(morgan("dev")); // Log HTTP requests
app.use(express.json()); // Parse incoming JSON
app.use(cors("*")); // Enable Cross Origin Resource Sharing

// ROUTES
/*

SUGGESTION: How I would restructure the app if I had to from scratch ->
// table users
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email TEXT,
  first_name TEXT,
  last_name TEXT,
  dob DATE,
  password TEXT,
);
// table wishes
CREATE TABLE wishes (
  id SERIAL PRIMARY KEY,
  name TEXT,
  link TEXT,
  user_id INTEGER REFERENCES users(id)
);
// table friends <- I wouldn't use this table, I would use a many to many relationship between users like so ->
CREATE TABLE users_users (
  user1_id INTEGER REFERENCES users(id),
  user2_id INTEGER REFERENCES users(id)
  PRIMARY KEY (user1_id, user2_id)
);

// server routes

// login -> POST /login (plus flow related routes) <- using oauth 2.0 or just JWT
// register -> POST /register
// logout -> POST /logout

// get all users -> GET /users
// get user -> GET /users/:id
// create user -> POST /users
// update user -> PATCH /users/:id
// delete user -> DELETE /users/:id
// get friends -> GET /users/:id/friends
// add friend -> POST /users/:id/friends
// delete friend -> DELETE /users/:id/friends/:friend_id

// get wishes by user -> GET /wishes?user_id=<user_id>
// create wish -> POST /wishes
// update wish -> PATCH /wishes/:id
// delete wish -> DELETE /wishes/:id

The above routes should provied all data/funtionality required for any view/action in the app
*/

app.use("/userwishlist", userWishlistController);
app.use("/users", usersController);
app.use("/dashboard", dashboardController);
// app.use("/friendsWishlist", friendsWishlistController);
app.use("/", (req, res) => {
  res.send("Welcome to Giftune!");
});
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;
