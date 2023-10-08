const express = require("express");
const {countryController } = require("../../controller");
const {countryValidation} = require("../../validation");
const validate = require("../../middlewares/validate");

const router = express.Router();

/* ------------------------------- CREATE COUNTRY ------------------------------ */
router.post(
    "/create-country",
    validate(countryValidation.createCountry),
    countryController .createCountry
);
/* ------------------------------ GET COUNTRY LIST ----------------------------- */
router.get(
    "/get-countrylist",
    countryController .getCountryList
);
/* ------------------------------- DELETE COUNTRY ------------------------------ */
router.delete(
    "/delete-country/:countryId",
    countryController .deleteRecord
);
/* ------------------------ COUNTRY RECORDS UPDATE BY ID ----------------------- */
router.put(
    "/update-record/:countryId",
    countryController .updateRecord
);
module.exports = router;