const db = require("../db/dbConfig");

const createUser = async ({ user_name, dob, email }) => {
  try {
    const newUser = await db.any(
      "INSERT INTO users(user_name,dob,email) VALUES ($1,$2,$3) RETURNING *",
      [user_name, dob, email]
    );
    return newUser;
  } catch (error) {
    return error;
  }
};

module.exports = {
  createUser,
};
