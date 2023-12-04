// DEPENDENCIES
const express = require("express");
const router = express.Router();
const {
  getUserProfile,
  getAllFriendsFromUser,
  getFriendsAndTheirWishlists,
  getWishlistById,
  deleteFriendEntryFriendsList,
  addFriendEntryFriendsList,
} = require("../queries/dashboardQuery");

// GET USER PROFILE, FRIENDS, AND FRIENDS WISHLISTS
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const userProfile = await getUserProfile(id);
    const friendsOrderedByDOB = await getFriendsAndTheirWishlists(id);
    res.status(200).json({ userProfile, friendsOrderedByDOB });
  } catch (e) {
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

//Deletes friend from friends_list table
router.delete("/:id/friends/:friendsId", async (req, res) => {
  const { id, friendsId } = req.params;
  try {
    const deletedFriend = await deleteFriendEntryFriendsList(id, friendsId);
    res.status(200).json(deletedFriend);
  } catch (error) {
    res.status(500).json({ message: `Error: ${error}` });
  }
});
//Add friend to friend_list table
router.post("/add-new-friend", async (req, res) => {
  const { user_id, friend_id } = req.body;

  try {
    const addedFriend = await addFriendEntryFriendsList(user_id, friend_id);
    res.status(200).json(addedFriend);
  } catch (error) {
    res.status(500).json({ message: `Error ${error}` });
  }
});

// EXPORT
module.exports = router;
