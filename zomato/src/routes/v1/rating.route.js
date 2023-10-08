const express = require("express");
const {ratingController} = require("../../controller");
const {ratingValidation} = require("../../validation");
const validate = require("../../middlewares/validate");

const router = express.Router();

/* ------------------------------- CREATE RATING ------------------------------ */
router.post(
    "/create-rating",
    validate(ratingValidation.createRating),
    ratingController.createRating
);
/* ------------------------------ GET RATING LIST ----------------------------- */
router.get(
    "/get-ratinglist",
    ratingController.getRatingList
);
/* ------------------------------- DELETE RATING ------------------------------ */
router.delete(
    "/delete-rating/:ratingId",
    ratingController.deleteRecord
);
/* ------------------------ RATING RECORDS UPDATE BY ID ----------------------- */
router.put(
    "/update-record/:ratingId",
    ratingController.updateRecord
);
module.exports = router;