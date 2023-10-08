const express = require("express");
const {ownerController} = require("../../controller");
const {ownerValidation} = require("../../validation");
const validate = require("../../middlewares/validate");

const router = express.Router();

/* ------------------------------- CREATE OWNER ------------------------------ */
router.post(
    "/create-owner",
    validate(ownerValidation.createOwner),
    ownerController.createOwner
);
/* ------------------------------ GET OWNER LIST ----------------------------- */
router.get(
    "/get-ownerlist",
    ownerController.getOwnerList
);
/* ------------------------------- DELETE OWNER ------------------------------ */
router.delete(
    "/delete-owner/:ownerId",
    ownerController.deleteRecord
);
/* ------------------------ OWNER RECORDS UPDATE BY ID ----------------------- */
router.put(
    "/update-record/:ownerId",
    ownerController.updateRecord
);
module.exports = router;