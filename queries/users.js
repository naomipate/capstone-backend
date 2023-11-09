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
    const userInfo = await db.any("SELECT * FROM users WHERE email=$1", [
      email,
    ]);
    return userInfo;
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


//dashboard queries to move
// const getAllFriendsFromUser = async (id) => {
//     try {
//         const allFriendsFromUser = await db.any(
//             `SELECT * FROM users 
//             INNER JOIN FRIENDS_LIST  
//             ON FRIENDS_LIST.user_id = users.id
//             WHERE FRIENDS_LIST.friends_id = $1`,
//              id)
//         return allFriendsFromUser
//     } catch (error) {
//         return error
//     }
// }

// const getWishlistById = async (id) => {
//     try {
//       const FriendWishlist = await db.any(
//         `SELECT * FROM wishlist WHERE user_id=$1`,
//         id
//       );
  
//       return FriendWishlist;
//     } catch (err) {
//       return err;
//     }
//   };
  

module.exports = {
    getAllUsers,
    getUsersById,
    // getAllFriendsFromUser,
    // getWishlistById,
    getUserByEmail,
    createUser,
}