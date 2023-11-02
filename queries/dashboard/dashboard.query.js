const db = require("../../db/dbConfig");

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

module.exports = {
  getUserProfile,
};
