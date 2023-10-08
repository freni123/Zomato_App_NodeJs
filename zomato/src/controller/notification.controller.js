const { notificationService } = require("../services");
/* ------------------------------- NOTIFICATION CREATE ------------------------------ */
const createNotification = async (req, res) => {
  try {
    const reqBody = req.body;
    const notification = await notificationService.createNotification(reqBody);
    if (!notification) {
      throw new Error("notification not found!");
    }
    res.status(200).json({
      success: true,
      message: "notification created successfully!",
      data: notification,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
/* ------------------------------ GET NOTIFICATION LIST ----------------------------- */
const getNotificationList = async (req, res) => {
  try {
    const getList = await notificationService.getNotificationList();
    if (!getList) {
      throw new Error("notification not found !");
    }
    res.status(200).json({
      success: true,
      message: "notification list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
/* ---------------------------- NOTIFICATION DATA DELETE ---------------------------- */
const deleteRecord = async (req, res) => {
  try {
    const notificationId = req.params.notificationId;
    const notificationExist = await notificationService.getNotificationById(
      notificationId
    );
    if (!notificationExist) {
      throw new Error("notification is not found !");
    }

    await notificationService.deleteRecord(notificationId);

    res.status(200).json({
      success: true,
      message: "Record deleted successfully !",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
/* ---------------------------- UPDATE NOTIFICATION DATA ---------------------------- */
const updateRecord = async (req, res) => {
  try {
    const notificationId = req.params.notificationId;
    const notificationExist = await notificationService.getNotificationById(
      notificationId
    );
    if (!notificationExist) {
      throw new Error("Something wents wrong , please try again or later !");
    }

    const updated = await notificationService.updateRecord(
      notificationId,
      req.body
    );

    res.status(200).json({
      success: true,
      message: "notification record updated successfully !",
      data: updated,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = {
  createNotification,
  getNotificationList,
  deleteRecord,
  updateRecord,
};
