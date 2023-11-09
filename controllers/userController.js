const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getUsersById,
  getUsersByEmail,
  createUser,
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

router.get("/find-email", async (req, res) => {
  console.log(req.query);
  const { email } = req.query;
  try {
    const foundUser = await getUserByEmail(email);
    res.status(200).json(foundUser);
  } catch (error) {
    res.status(500).json({
      error: error,
    });
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

router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const createdUser = await createUser(req.body);
    res.status(200).json(createdUser[0]);
  } catch (error) {
    res.status(404).json({ error: error });
  }
});

module.exports = router;
