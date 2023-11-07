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

<<<<<<< HEAD
const getUserByEmail = async (email) => {
  try {
    const userInfo = await db.any("SELECT * FROM users WHERE email=$1", [
      email,
    ]);
    return userInfo;
  } catch (error) {
    return error;
  }
};

const createUser = async ({ user_name, dob, email }) => {
=======
const createUser = async ({ user_name, first_name, last_name, dob, email }) => {
>>>>>>> a91556c70fde90ddc90fd6bbef00b96a10c30b38
  try {
    const newUser = await db.any(
      "INSERT INTO users(user_name,dob,email) VALUES ($1,$2,$3,$4,$5) RETURNING *",
      [user_name, first_name, last_name, dob, email]
    );
    return newUser;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllUsers,
  getUsersById,
  getUserByEmail,
  createUser,
};
