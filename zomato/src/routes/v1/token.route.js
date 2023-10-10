const express = require("express");
const {tokenController} = require("../../controller");
const {tokenValidation} = require("../../validation");
const validate = require("../../middlewares/validate");

const router = express.Router();

/* ------------------------------ CREATE TOKEN ------------------------------ */
router.post(
    "/create-token",
    tokenController.generateToken
);
/* ---------------------- VERIFY TOKEN GET USER DETAILS --------------------- */
router.get(
    "/verify-token",
    tokenController.verifyToken
);
module.exports = router;