const express = require("express");
const { userValidation } = require("../../validation");
const validate = require("../../middlewares/validate");
const { userController } = require("../../controller");
const { auth } = require("../../middlewares/auth");

const router = express.Router();

/* ------------------------------- CTRATE USER ------------------------------ */
router.post(
  "/createUser",
  auth(),
  validate(userValidation.createUser),
  userController.createUser
);

/* ------------------------------ GET USER LIST ----------------------------- */
router.get("/getUserList", userController.getUserList);

/* ---------------------------- GET USER DETAILS ---------------------------- */
router.get("/getUserDetails/:userId", userController.getUserDetails);

/* ------------------------------- UPDATE USER ------------------------------ */
router.put("/updateUser/:userId", userController.updateUser);

/* ------------------------------- DELETE USER ------------------------------ */
router.delete("/deleteUser/:userId", userController.deleteUser);

/* -------------------------------- SEND MAIL ------------------------------- */
router.post("/sendMail", userController.sendMail);

/* ------------------------------ USER REGISTER ----------------------------- */
router.post("/register", userController.register);

/* ------------------------------- USER LOGIN ------------------------------- */
router.post("/login", userController.login);

/* ------------------------------ GET ALL USER ------------------------------ */
router.get("/allUsers", userController.getAllUser);

module.exports = router;
