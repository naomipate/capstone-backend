const db = require("../db/dbConfig");

// GET USER PROFILE
const getUserProfile = async (id) => {
  // user shown in nav
  const user = await db.one("SELECT * FROM users WHERE id=$1", id);
  return user;
};

const getAllFriendsFromUser = async (id) => {
  try {
    const allFriendsFromUser = await db.any(
      `SELECT * FROM users 
          INNER JOIN FRIENDS_LIST  
          ON FRIENDS_LIST.user_id = users.id
          WHERE FRIENDS_LIST.friends_id = $1`,
      id
    );
    return allFriendsFromUser;
  } catch (error) {
    return error;
  }
};

const getWishlistById = async (id) => {
  try {
    const FriendWishlist = await db.any(
      `SELECT * FROM wishlist WHERE user_id=$1 ORDER BY item_name ASC`,
      id
    );

    return FriendWishlist;
  } catch (err) {
    return err;
  }
};

const deleteFriendEntryFriendsList = async (user_id, friend_id) => {
  try {
    const deletedFriend = await db.one(
      `DELETE FROM friends_list WHERE user_id=$1 AND friends_id=$2 RETURNING *`,
      [user_id, friend_id]
    );
    return deletedFriend;
  } catch (error) {
    return error;
  }
};

const updateItemBoughtByItemId = async (id, is_bought, assigned_user) => {
  try {
    const updatedWishlist = await db.one(
      `UPDATE wishlist SET is_bought=$1, assigned_user=$2 WHERE id=$3 RETURNING *`,
      [is_bought, assigned_user, id]
    );
    return updatedWishlist;
  } catch (error) {
    return error;
  }
};

const addFriendEntryFriendsList = async (user_id, friend_id) => {
  try {
    const addedFriend = await db.any(
      `INSERT INTO friends_list(user_id, friends_id) VALUES ($1, $2),($2, $1) RETURNING *`,
      [user_id, friend_id]
    );
    return addedFriend;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getUserProfile,
  getAllFriendsFromUser,
  getWishlistById,
  deleteFriendEntryFriendsList,
  updateItemBoughtByItemId,
  addFriendEntryFriendsList,
};
