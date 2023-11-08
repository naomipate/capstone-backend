// DEPENDENCIES
const express = require("express");
const router = express.Router();

const {
  getAllWishlists,
  getUserWishlist,
  createWishlist,
  deleteUserWishlist,
  updateUserWishlist,
} = require("../queries/userWishlist");

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
        message: "You have to give gift name",
      });
    } else {
      res.json({ data: createdWishlist });
    }
  });

// GET, UPDATE AND DELETE BY ID
router
  .route("/:id")
  .get(async (req, res) => {
    const { id } = req.params;

    const userWishlist = await getUserWishlist(id);

    if (!userWishlist) {
      res.status(400).json({
        status: false,
        message: "Id not found!",
      });
    } else {
      res.json(userWishlist);
    }
  })
  .delete(async (req, res) => {
    const { id } = req.params;
    const deletedUserWishlist = await deleteUserWishlist(id);

    if (deletedUserWishlist.length === 0) {
      res.status(404).json({ message: "Id not found!" });
    } else {
      res.json(deletedUserWishlist[0]);
    }
  });

router.put("/:id", async (req, res) => {
  const { user_id, id } = req.params;
  const updatedUserWishlist = await updateUserWishlist(user_id, id, req.body);

  if (updatedUserWishlist.length === 0) {
    res.status(404).json({ message: "Id not found!" });
  } else {
    res.json(updatedUserWishlist[0]);
  }
});

// EXPORT
module.exports = router;