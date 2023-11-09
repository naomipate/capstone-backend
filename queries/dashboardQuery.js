const db = require("../db/dbConfig");

// GET USER PROFILE ON SIGN-IN
const getUserProfile = async (id) => {
  const user = await db.one("SELECT * FROM users WHERE id=$1", id);
  const requests = await db.any(
    "SELECT * FROM friends_list WHERE user_id=$1 OR friends_id=$1",
    id
  );
  let usersRequest = requests
    .filter((userRequest) => userRequest.user_id === Number(id))
    .map((request) => request.friends_id);

  let friendsRequest = requests
    .filter((friendRequest) => friendRequest.friends_id === Number(id))
    .map((request) => request.user_id);

  let connectionIds = [];
  for (let requestId of usersRequest) {
    if (friendsRequest.includes(requestId)) {
      connectionIds.push(requestId);
    }
  }
  let userConnections = await db.any(
    "SELECT * FROM users WHERE id in ($1:csv) ORDER BY dob ASC",
    [connectionIds]
  );

  for (let connection of userConnections) {
    let wishlist = await db.any(
      "SELECT * FROM wishlist WHERE user_id=$1",
      connection.id
    );
    connection.wishlist = wishlist;
  }
  user.connections = userConnections;

  return user;
};

const getAllFriendsFromUser = async (id) => {
  try {
      const allFriendsFromUser = await db.any(
          `SELECT * FROM users 
          INNER JOIN FRIENDS_LIST  
          ON FRIENDS_LIST.user_id = users.id
          WHERE FRIENDS_LIST.friends_id = $1`,
           id)
      return allFriendsFromUser
  } catch (error) {
      return error
  }
}

const getWishlistById = async (id) => {
  try {
    const FriendWishlist = await db.any(
      `SELECT * FROM wishlist WHERE user_id=$1`,
      id
    );

    return FriendWishlist;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getUserProfile,
  getAllFriendsFromUser,
  getWishlistById

};
