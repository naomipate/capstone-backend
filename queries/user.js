const db = require('../db/dbConfig');

const getUserByEmail = async ( email ) => {
    try {
        const userInfo = await db.any("SELECT * FROM users WHERE email=$1", [email]);
        return userInfo;
    } catch (error) {
        return error;
    }
}

module.exports = {
    getUserByEmail
}