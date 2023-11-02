const db = require("../db/dbConfig");

const getAllUsers = async () => {
  try {
    const allUsers = await db.any("SELECT * FROM users");
    return allUsers;
  } catch (error) {
    return error;
  }
};

const getUsersById = async (id) => {
  try {
    const user = await db.any(`SELECT * FROM users WHERE id=$1`, id);
    return user;
  } catch (error) {
    return error;
  }
};

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
  getAllUsers,
  getUsersById,
  createUser,
};
