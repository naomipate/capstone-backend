// DEPENDENCIES
const express = require("express");
const router = express.Router();
const {
  getAllUpcomingFriends,
  getUserProfile,
} = require("../../queries/dashboard/dashboard.query");

// GET USER PROFILE
router.get("/:id", (req, res) => {
  console.log(req.params.id);
  res.status(200).json(getUserProfile());
});

// GET ALL UPCOMING FRIENDS
router.get("/", (req, res) => {
  res.status(200).json();
});

// POST
router.post("/", (req, res) => {
  // Controller logic to create a new item
});

// EDIT
router.put("/:id", (req, res) => {
  // Controller logic to edit an item
});

// DELETE
router.delete("/:id", (req, res) => {
  // Controller logic to delete an item
});

// EXPORT
module.exports = router;
