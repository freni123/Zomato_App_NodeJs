const express = require("express");
const {notificationController} = require("../../controller");
const {notificationValidation} = require("../../validation");
const validate = require("../../middlewares/validate");

const router = express.Router();

/* ------------------------------- CREATE NOTIFICATION ------------------------------ */
router.post(
    "/create-notification",
    validate(notificationValidation.createNotification),
    notificationController.createNotification
);
/* ------------------------------ GET NOTIFICATION LIST ----------------------------- */
router.get(
    "/get-notificationlist",
    notificationController.getNotificationList
);
/* ------------------------------- DELETE NOTIFICATION ------------------------------ */
router.delete(
    "/delete-notification/:notificationId",
    notificationController.deleteRecord
);
/* ------------------------ NOTIFICATION RECORDS UPDATE BY ID ----------------------- */
router.put(
    "/update-record/:notificationId",
    notificationController.updateRecord
);
module.exports = router;