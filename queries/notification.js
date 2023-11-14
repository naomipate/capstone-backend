const db = require("../db/dbConfig");
const getNotification = async (id) => {
  try {
    const foundNotification = await db.any(
      "SELECT * FROM notifications WHERE user_id=$1",
      [id]
    );
    return foundNotification;
  } catch (error) {
    return error;
  }
};

const addNotification = async ({ id, message, sender_id }) => {
  try {
    const newNoti = await db.any(
      "INSERT INTO notifications(user_id, messages, sender_id) VALUES ($1,$2,$3) RETURNING *",
      [id, message, sender_id]
    );
    return newNoti;
  } catch (error) {
    return error;
  }
};

const getAllNotifications = async () => {
  try {
    const allNotification = await db.any("SELECT * FROM notifications");
    return allNotification;
  } catch (error) {
    return error;
  }
};
const deleteNotification = async (id) => {
  try {
    const deletedNotification = await db.any(
      "DELETE FROM notifications WHERE id=$1 RETURNING *",
      [id]
    );
    return deletedNotification;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getNotification,
  addNotification,
  getAllNotifications,
  deleteNotification,
};
