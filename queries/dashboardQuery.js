const db = require("../db/dbConfig");

// GET USER PROFILE ON SIGN-IN
const getUserProfile = async (id) => {
  // user shown in nav
  const user = await db.one("SELECT * FROM users WHERE id=$1", id);
  return user;
};

const getFriendsAndTheirWishlists = async (id) => {
  // Friends
  // The way the schema is currently setup there will be duplicate records returned in this query.
  // However, I like this query and left the suggestion for how to rewrite the schema in the app.js file
  const requests = await db.any(
    "SELECT * FROM friends_list WHERE user_id=$1 OR friends_id=$1",
    id
  );
  // comparing to confirm friendship
  // Oh I see, the duplicates are to confirm friendship, based on requests, cool solution :o
  let usersRequest = requests
    .filter((userRequest) => userRequest.user_id === Number(id))
    .map((request) => request.friends_id);

  let friendsRequest = requests
    .filter((friendRequest) => friendRequest.friends_id === Number(id))
    .map((request) => request.user_id);

  // friendship confirmed and pushed into array for Friends list
  let connectionIds = [];
  for (let requestId of usersRequest) {
    if (friendsRequest.includes(requestId)) {
      connectionIds.push(requestId);
    }
  }
  /*
  The above logic for confirmed friendships can be rewriten more simply as ->
  const friendRequests = await db.any("SELECT * FROM friends_list WHERE user_id=$1 OR friends_id=$1", id);
  const friends = {};
  for (const {user_id, friends_id} of friendRequests) {
    const potentialFriend = [user_id, friends_id].find((user) => user != id);
    if (friends[potentialFriend] == null) {
      friends[potentialFriend] = false;
    } else {
      friends[potentialFriend] = true;
    }
  }

  const confirmedFriends = Object.entries(friends)
    .filter(([_, isFriend]) => isFriend)
    .map(([friendId]) => Number(friendId));
  // confirmedFriends will be an array friend ids where there was a reciprocal request

  */

  // Ordering friends list by DOB
  let userConnections = await db.any(
    "SELECT * FROM users WHERE id in ($1:csv) ORDER BY dob ASC",
    [connectionIds]
  );

  // Grabbing friends' wishlists by user_id
  for (let connection of userConnections) {
    let wishlist = await db.any(
      "SELECT * FROM wishlist WHERE user_id=$1",
      connection.id
    );
    connection.wishlist = wishlist;
  }

  return userConnections;
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
  getFriendsAndTheirWishlists,
  getWishlistById,
  
};
