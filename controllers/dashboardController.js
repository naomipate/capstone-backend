// DEPENDENCIES
const express = require("express");
const router = express.Router();
const {
  getUserProfile,
  getAllFriendsFromUser,
  getFriendsAndTheirWishlists,
  getWishlistById
} = require("../queries/dashboardQuery");

// GET USER PROFILE, FRIENDS, AND FRIENDS WISHLISTS
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const userProfile = await getUserProfile(id);
    const friendsOrderedByDOB = await getFriendsAndTheirWishlists(id);
    res.status(200).json({ userProfile, friendsOrderedByDOB });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: `Error: ${e}` });
  }
});

// ALL FRIENDS
router.get("/:id/friends", async (req, res) => {
  const { id } = req.params;
  try {
    const userFriendsList = await getAllFriendsFromUser(id);
    res.status(200).json(userFriendsList);
  } catch (e) {
    res.status(500).json({ message: `Error: ${e}` });
  }
});

// FRIEND'S PROFILE AND WISHLIST
router.get("/:id/friends/:friendsId", async (req, res) => {
  const { friendsId } = req.params;
  try {
    const friendProfile = await getUserProfile(friendsId);
    const friendsWishlist = await getWishlistById(friendsId);
    res.status(200).json({ friendProfile, friendsWishlist });
  } catch (e) {
    res.status(500).json({ message: `Error: ${e}` });
  }
});

// EXPORT
module.exports = router;
