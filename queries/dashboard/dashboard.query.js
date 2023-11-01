const db = require("../../db/dbConfig");

// GET ALL UPCOMING FRIENDS BY DESCENDING DATE
const getAllUpcomingFriends = async () => {
  try {
    const allUpcomingFriendsBirthdays = await db.any(
      "SELECT * FROM friends_list ORDER BY dob DESC"
    );
    return allUpcomingFriendsBirthdays;
  } catch (error) {
    return error;
  }
};

// GET USER PROFILE ON SIGN-IN
const getUserProfile = async (id) => {
  try {
    const user = await db.any("SELECT * FROM users WHERE id=$1", id);
    return user;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllUpcomingFriends,
  getUserProfile,
};
