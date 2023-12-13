const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getUsersById,
  editUserProfile,
  getUserByEmail,
  createUser,
  updateUserProfile,
} = require("../queries/users");

router.get("/", async (req, res) => {
  const allUsers = await getAllUsers();
  if (allUsers[0]) {
    res.json(allUsers);
  } else {
    res.status(500).json({ error: "Server Error!" });
  }
});

router.post("/find-email", async (req, res) => {
  const { email } = req.body;
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

router.post("/profile/:id", async (req, res) => {
  const { id } = req.params;
  const incomingUserProfile = req.body;
  try {
    const updatedUser = await editUserProfile(id, incomingUserProfile);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(404).json({ error: error });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedUserProfile = await updateUserProfile(id, req.body);
  if (!updatedUserProfile) {
    res.status(404).json({ message: "Id not found!" });
  } else {
    res.json(updatedUserProfile);
  }
});

module.exports = router;
