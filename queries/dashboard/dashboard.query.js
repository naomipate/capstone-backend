const db = require("../db/dbConfig");

// GET ALL UPCOMING FRIENDS BY ASCENDING DATE
const getAllUpcomingFriends = async () => {
  try {
    const allUpcomingFriendsBirthdays = await db.any(
      "SELECT * FROM friends_list ORDER BY dob ASC"
    );
    return allUpcomingFriendsBirthdays;
  } catch (error) {
    return error;
  }
};

// GET USER PROFILE ON SIGN-IN
const getUserProfile = async (id) => {
  try {
    const game = await db.any("SELECT * FROM games WHERE id=$1", [id]);
    return game;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllUpcomingFriends,
  getUserProfile,
};
