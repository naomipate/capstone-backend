const db = require("../db/dbConfig")

const getAllUsers = async () => {
    try {
        const allUsers = await db.any("SELECT * FROM users");
        return allUsers
    } catch (error) {
        return error 
    }
};

const getUsersById = async (id) => {
    try {
        const user = await db.any(`SELECT * FROM users WHERE id=$1`, id)
        return user
    } catch (error) {
        return error
    }
}

module.exports = {
    getAllUsers,
    getUsersById
}