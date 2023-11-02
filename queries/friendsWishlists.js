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
      `SELECT * FROM wishlist AS w INNER JOIN friends_list AS f ON w.user_id = f.friends_id WHERE f.user_id = $1`,
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
      `INSERT INTO wishlist (user_id, item_name, link)
      VALUES ($1, $2, $3) RETURNING *`,
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
      `DELETE FROM wishlist WHERE user_id = $1 AND item_name = $2 RETURNING *`,
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
