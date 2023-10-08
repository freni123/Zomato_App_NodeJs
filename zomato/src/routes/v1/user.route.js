const express = require("express");
const {userController} = require("../../controller");
const {userValidation} = require("../../validation");
const validate = require("../../middlewares/validate");

const router = express.Router();

/* ------------------------------- CREATE USER ------------------------------ */
router.post(
    "/create-user",
    validate(userValidation.createUser),
    userController.createUser
);
/* ------------------------------ GET USER LIST ----------------------------- */
router.get(
    "/get-userlist",
    userController.getUserList
);
/* ------------------------------- DELETE USER ------------------------------ */
router.delete(
    "/delete-user/:userId",
    userController.deleteRecord
);
/* ------------------------ USER RECORDS UPDATE BY ID ----------------------- */
router.put(
    "/update-record/:userId",
    userController.updateRecord
);
module.exports = router;