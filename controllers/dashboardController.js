// DEPENDENCIES
const express = require("express");
const router = express.Router();
const {
  getUserProfile,
  getAllFriendsFromUser,
  getWishlistById,
  deleteFriendEntryFriendsList,
  updateItemBoughtByItemId,
  addFriendEntryFriendsList,
} = require("../queries/dashboardQuery");

// GET USER PROFILE, FRIENDS, AND FRIENDS WISHLISTS
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const userProfile = await getUserProfile(id);
    const friends = await getAllFriendsFromUser(id);
    res.status(200).json({ userProfile, friends });
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
router.get("/:id/friends/:friendId", async (req, res) => {
  const { friendId } = req.params;
  try {
    const friendProfile = await getUserProfile(friendId);
    const friendsWishlist = await getWishlistById(friendId);
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
    if (addedFriend.length === 0) {
      res.status(204).json({ error: `Please Input valid id's` });
    } else {
      res.status(200).json(addedFriend);
    }
  } catch (error) {
    res.status(500).json({ message: `Error ${error}` });
  }
});

router.put("/item-details", async (req, res) => {
  // console.log(req.body);
  // console.log(req.body.id, req.body.is_bought, req.body.assigned_user);
  try {
    const userUpdatedFriendsWishlist = await updateItemBoughtByItemId(
      req.body.id,
      req.body.is_bought,
      req.body.assigned_user
    );

    res.status(200).json(userUpdatedFriendsWishlist);
  } catch (error) {
    res.status(500).json({ message: `Error: ${error}` });
  }
});

router.get("*", async (req, res) => {
  try {
    res.send(
      "Welcome to Dashboard, Welcome to Dashboard, Welcome to Dashboard, Welcome to Dashboard!"
    );
  } catch (e) {
    res.status(500).json({ message: `Error: ${e}` });
  }
});

// EXPORT
module.exports = router;
