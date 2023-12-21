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

const addNotification = async ({
  id,
  message,
  sender_id,
  sender_name,
  msg_type,
  is_read,
  date_stamp,
  time_stamp,
}) => {
  try {
    const newNoti = await db.one(
      "INSERT INTO notifications(user_id, messages, sender_id, sender_name, msg_type, is_read, date_stamp, time_stamp) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *",
      [
        id,
        message,
        sender_id,
        sender_name,
        msg_type,
        is_read,
        date_stamp,
        time_stamp,
      ]
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
    const deletedNotification = await db.one(
      "DELETE FROM notifications WHERE id=$1 RETURNING *",
      [id]
    );
    return deletedNotification;
  } catch (error) {
    return error;
  }
};
const updateNotifications = async ({ id, is_read }) => {
  try {
    const updatedNoti = await db.one(
      "UPDATE notifications SET is_read=$1 WHERE id=$2 RETURNING *",
      [is_read, id]
    );
    return updatedNoti;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getNotification,
  addNotification,
  getAllNotifications,
  deleteNotification,
  updateNotifications,
};
