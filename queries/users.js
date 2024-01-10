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

const getUserByEmail = async (email) => {
  try {
    const userInfo = await db.one("SELECT * FROM users WHERE email=$1", [
      email,
    ]);
    return userInfo;
  } catch (error) {
    return error;
  }
};

const createUser = async ({ user_picture, user_name, first_name, last_name, dob, email }) => {
  try {
    const newUser = await db.any(
      "INSERT INTO users(user_picture,user_name,first_name,last_name,dob,email) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *",
      [user_picture, user_name, first_name, last_name, dob, email]
    );
    return newUser;
  } catch (error) {
    return error;
  }
};

const editUserProfile = async () => {
  try {
    const user = await db.one(
      "INSERT INTO users(user_picture,user_name,first_name,last_name,dob,email) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *",
      [user_picture, user_name, first_name, last_name, dob, email]
    );
    return user;
  } catch (e) {
    return e;
  }
};

const updateUserProfile = async (id, userProfile) => {
  let { user_picture, user_name, first_name, last_name, email, dob } = userProfile;
  try {
    const updatedUserProfile = await db.one(
      `UPDATE users SET user_picture = $1, user_name = $2, first_name = $3, last_name = $4, email = $5, dob = $6 WHERE id = $7 RETURNING *`,
      [user_picture, user_name, first_name, last_name, email, dob, id]
    );
    return updatedUserProfile;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllUsers,
  getUsersById,
  editUserProfile,
  getUserByEmail,
  createUser,
  updateUserProfile,
};
