const express = require("express");
const router = express.Router();

const {
    getAllUsers,
    getUsersById
} = require("../queries/users");

router.get("/", async (req, res) => {
  const allUsers = await getAllUsers();
  console.log(allUsers);
  if (allUsers[0]) {
    res.json(allUsers);
  } else {
    res.status(500).json({ error: "Server Error!" });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  const user = await getUsersById(id);

  if (user.length === 0) {
    res.status(500).json({ error: "User not found!" });
  } else {
    res.status(200).json(user[0]);
  }
});

module.exports = router;
