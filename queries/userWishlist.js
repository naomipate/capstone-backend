const db = require("../db/dbConfig");

const getAllWishlists = async () => {
  try {
    const allWishlists = await db.any("SELECT * FROM wishlist ORDER BY id ASC");

    return allWishlists;
  } catch (err) {
    return err;
  }
};

const getUserWishlist = async (id) => {
  try {
    const userWishlist = await db.any(
      `SELECT * FROM wishlist WHERE user_id = $1`,
      [id]
    );

    return userWishlist;
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

const deleteUserWishlist = async (id) => {
  try {
    const deletedUserWishlist = await db.one(
      `DELETE FROM wishlist WHERE id = $1 RETURNING *`,
      [id]
    );

    return deletedUserWishlist;
  } catch (err) {
    throw err;
  }
};

const updateUserWishlist = async (id, wishlist) => {
  let { item_name, link } = wishlist;
  try {
    const updatedWishlist = await db.any(
      `UPDATE wishlist SET item_name = $1, link = $2 WHERE id = $3 RETURNING *`,
      [item_name, link, id]
    );

    return updatedWishlist;
  } catch (error) {
    return error;
  }
};
module.exports = {
  getAllWishlists,
  getUserWishlist,
  createWishlist,
  deleteUserWishlist,
  updateUserWishlist,
};
