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
      `SELECT * FROM wishlist AS w 
      INNER JOIN friends_list AS f 
      ON w.user_id = f.friends_id WHERE f.user_id = $1`,
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
      [data.user_id, data.item_name, data.link]
    );

    return newWishlist;
  } catch (err) {
    return err;
  }
};

const deleteFriendsWishlist = async (id) => {
  try {
    const deletedFriendsWishlist = await db.one(
      `DELETE FROM wishlist WHERE id = $1 RETURNING *`,
      id
    );

    return deletedFriendsWishlist;
  } catch (err) {
    throw err;
  }
};
module.exports = {
  getAllWishlists,
  getFriendsWishlist,
  createWishlist,
  deleteFriendsWishlist,
};
