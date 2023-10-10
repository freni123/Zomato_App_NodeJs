const { Notification } = require("../models");

/* ------------------------------- CREATE NOTIFICATION ------------------------------ */
const createNotification = async (reqBody) => {
  return Notification.create(reqBody);
};
/* ------------------------------ GET NOTIFICATION LIST ----------------------------- */
const getNotificationList = async (req, res) => {
  return Notification.find().populate("user").populate("restaurant");
};
/* ------------------------- GET NOTIFICATION RECORDS BY ID ------------------------- */
const getNotificationById = async (notificationId) => {
  return Notification.findById(notificationId);
};
/* --------------------------- NOTIFICATION RECORDS UPDATE BY ID --------------------------- */
const updateRecord = async (notificationId, updateBody) => {
  return Notification.findByIdAndUpdate(notificationId, { $set: updateBody });
};
/* ------------------------------- DELETE NOTIFICATION ------------------------------ */
const deleteRecord = async (notificationId) => {
  return Notification.findByIdAndDelete(notificationId);
};

module.exports = {
  createNotification,
  getNotificationById,
  getNotificationList,
  updateRecord,
  deleteRecord,
};
