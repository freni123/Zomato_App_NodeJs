const express = require("express");
const {stateController} = require("../../controller");
const {stateValidation} = require("../../validation");
const validate = require("../../middlewares/validate");

const router = express.Router();

/* ------------------------------- STATE USER ------------------------------ */
router.post(
    "/create-state",
    validate(stateValidation.createState),
    stateController.createState
);
/* ------------------------------ GET STATE LIST ----------------------------- */
router.get(
    "/get-statelist",
    stateController.getStateList
);
/* ------------------------------- DELETE STATE ------------------------------ */
router.delete(
    "/delete-state/:stateId",
    stateController.deleteRecord
);
/* ------------------------ STATE RECORDS UPDATE BY ID ----------------------- */
router.put(
    "/update-record/:stateId",
    stateController.updateRecord
);
module.exports = router;