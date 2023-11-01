// DEPENDENCIES
const express = require('express');
const morgan = require("morgan");
const cors = require('cors');

// CONTROLLERS
// const exampleController = require('./controllers/example.controller');
const usersController = require('./controllers/userController')

// CONFIG
const app = express();

// MIDDLEWARE
app.use(morgan("dev")); // Log HTTP requests
app.use(express.json()); // Parse incoming JSON
app.use(cors()); // Enable Cross Origin Resource Sharing

// ROUTES
// app.use('/example', exampleController);
app.use("/users", usersController)


app.get("/", (req, res) => {
    res.send("Welcome to Giftune!");
});

app.get("*", (req, res) => {
    res.status(404).send("Page not found");
  });

// EXPORT
module.exports = app;