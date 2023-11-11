const db = require("../db/dbConfig");

// Why is this a separate file from users.js?
const getAllUsers = async () => {
  try {
    const allUsers = await db.any("SELECT * FROM users ORDER BY id ASC");

    return allUsers;
  } catch (e) {
    return e;
  }
};

module.exports = { getAllUsers };
