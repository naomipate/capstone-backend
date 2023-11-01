const express = require("express");
const router = express.Router();

const { getAllUsers } = require("../queries/properties");

router.route("/").get(async (req, res) => {
  const allUsers = await getAllUsers();

  if (!allUsers) {
    res.status(500).json({ error: "Server error" });
  } else {
    res.json(allUsers);
  }
});
module.exports = router;
