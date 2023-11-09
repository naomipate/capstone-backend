// DEPENDENCIES
const express = require("express");
const router = express.Router();
// let exampleModel = require("../models/example.model");

// Make sure your model is working
// console.log(exampleModel);

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
    const { wishlist_id } = req.body;
    const createdWishlist = await createWishlist(req.body);

    if (!wishlist_id) {
      res.status(400).json({
        status: false,
        message: "You have to give a wishlist_id for the wishlist.",
      });
    } else {
      res.json({ status: true, data: createdWishlist });
    }
  });

// GET AND DELETE BY ID
router
  .route("/:id")
  .get(async (req, res) => {
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
  })
  .delete(async (req, res) => {
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
