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
      id
    );

    return userWishlist;
  } catch (err) {
    return err;
  }
};

const createWishlist = async (data) => {
  try {
    const newWishlist = await db.one(
      `INSERT INTO wishlist (user_id, is_bought, item_name, item_price, link)
      VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [data.user_id, false, data.item_name, data.item_price, data.link]
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
  let { item_name, item_price, link } = wishlist;
  try {
    const updatedWishlist = await db.any(
      `UPDATE wishlist SET item_name = $1, item_price = $2, link = $3 WHERE id = $4 RETURNING *`,
      [item_name, item_price, link, id]
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
