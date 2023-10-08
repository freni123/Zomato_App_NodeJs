const express = require("express");
const {adminController} = require("../../controller");
const {adminValidation} = require("../../validation");
const validate = require("../../middlewares/validate");

const router = express.Router();

/* ------------------------------- CREATE ADMIN ------------------------------ */
router.post(
    "/create-admin",
    validate(adminValidation.createAdmin),
    adminController.createAdmin
);
/* ------------------------------ GET ADMIN LIST ----------------------------- */
router.get(
    "/get-adminlist",
    adminController.getAdminList
);
/* ------------------------------- DELETE ADMIN ------------------------------ */
router.delete(
    "/delete-admin/:adminId",
    adminController.deleteRecord
);
/* ------------------------ ADMIN RECORDS UPDATE BY ID ----------------------- */
router.put(
    "/update-record/:adminId",
    adminController.updateRecord
);
module.exports = router;