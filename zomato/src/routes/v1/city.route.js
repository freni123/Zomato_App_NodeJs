const express = require("express");
const {cityController} = require("../../controller");
const {cityValidation} = require("../../validation");
const validate = require("../../middlewares/validate");

const router = express.Router();

/* ------------------------------- CREATE CITY ------------------------------ */
router.post(
    "/create-city",
    validate(cityValidation.createCity),
    cityController.createCity
);
/* ------------------------------ GET CITY LIST ----------------------------- */
router.get(
    "/get-citylist",
    cityController.getCityList
);
/* ------------------------------- DELETE CITY ------------------------------ */
router.delete(
    "/delete-city/:cityId",
    cityController.deleteRecord
);
/* ------------------------ CITY RECORDS UPDATE BY ID ----------------------- */
router.put(
    "/update-record/:cityId",
    cityController.updateRecord
);
module.exports = router;