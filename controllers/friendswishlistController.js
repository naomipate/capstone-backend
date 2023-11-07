// DEPENDENCIES
const express = require("express");
const router = express.Router();

const {
  getAllWishlists,
  getFriendsWishlist,
  createWishlist,
  deleteFriendsWishlist,
} = require("../queries/friendsWishlists");

// GET AND POST
router
  .route("/")
  .get(async (req, res) => {
    const allWishlists = await getAllWishlists();

    if (!allWishlists) {
      res.status(500).json({ error: "Server error" });
    } else {
      res.json(allWishlists);
    }
  })
  .post(async (req, res) => {
    const { item_name } = req.body;
    const createdWishlist = await createWishlist(req.body);

    if (!item_name) {
      res.status(400).json({
        status: false,
        message: "You have to give gift item name",
      });
    } else {
      res.json({ status: true, data: createdWishlist });
    }
  });

// GET BY ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const friendsWishlist = await getFriendsWishlist(id);

  if (!friendsWishlist) {
    res.status(400).json({
      status: false,
      message: "Id not found!",
    });
  } else {
    res.json(friendsWishlist);
  }
});

// DELETE BY ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedFriendsWishlist = await deleteFriendsWishlist(id);

  if (deletedFriendsWishlist.length === 0) {
    res.status(404).json({ message: "Id not found!" });
  } else {
    res.json(deletedFriendsWishlist[0]);
  }
});

// EXPORT
module.exports = router;
