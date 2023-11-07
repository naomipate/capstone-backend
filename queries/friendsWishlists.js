const db = require("../db/dbConfig");

const getAllWishlists = async () => {
  try {
    const allWishlists = await db.any("SELECT * FROM wishlist ORDER BY id ASC");

    return allWishlists;
  } catch (err) {
    return err;
  }
};

const getFriendsWishlist = async (id) => {
  try {
    const FriendWishlist = await db.any(
      `SELECT * FROM wishlist WHERE id = $1`,
      id
    );

    return FriendWishlist;
  } catch (err) {
    return err;
  }
};

const createWishlist = async (data) => {
  try {
    const newWishlist = await db.one(
      `INSERT INTO wishlist (wishlist_id)
      VALUES ($1,) RETURNING *`,
      [data.wishlist_id]
    );

    return newWishlist;
  } catch (err) {
    return err;
  }
};

const deleteFriendsWishlist = async (id) => {
  try {
    const deletedFriendsWishlist = await db.any(
      `DELETE FROM wishlist WHERE id = $1 RETURNING *`,
      id
    );

    return deletedFriendsWishlist;
  } catch (err) {
    console.log(err);
  }
};
module.exports = {
  getAllWishlists,
  getFriendsWishlist,
  createWishlist,
  deleteFriendsWishlist,
};
