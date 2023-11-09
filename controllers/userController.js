const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getUsersById,
  getAllFriendsFromUser,
  getWishlistById,
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

router.get("/:id/friends", async (req, res) => {
  const id = req.params.id;

  const userFriends = await getAllFriendsFromUser(id);

  if (userFriends[0]) {
    res.json(userFriends);
  } else {
    res.status(500).json({ error: "Server Error!" });
  }
})

router.get("/:id/wish-list", async (req, res) => {
  const id = req.params.id;

  const userFriends = await getWishlistById(id);

  if (userFriends[0]) {
    res.json(userFriends);
  } else {
    res.status(500).json({ error: "Server Error!" });
  }
})


module.exports = router;
