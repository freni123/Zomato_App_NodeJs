const express = require("express");
const { tokenController } = require("../../controller");
const { tokenValidation } = require("../../validation");
const validate = require("../../middlewares/validate");
const { auth } = require("../../middlewares/auth");

const router = express.Router();

/* ------------------------------ CREATE TOKEN ------------------------------ */
router.post(
  "/create-token",
  auth(),
  validate(tokenValidation.generateToken),
  tokenController.generateToken
);
/* ---------------------- VERIFY TOKEN GET USER DETAILS --------------------- */
router.get("/verify-token", auth(), tokenController.verifyToken);
module.exports = router;
