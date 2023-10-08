const express = require("express");
const {reviewController} = require("../../controller");
const {reviewValidation} = require("../../validation");
const validate = require("../../middlewares/validate");

const router = express.Router();

/* ------------------------------- CREATE REVIEW ------------------------------ */
router.post(
    "/create-review",
    validate(reviewValidation.createUser),
    reviewController.createReview
);
/* ------------------------------ GET REVIEW LIST ----------------------------- */
router.get(
    "/get-reviewlist",
    reviewController.getReviewList
);
/* ------------------------------- DELETE REVIEW ------------------------------ */
router.delete(
    "/delete-review/:reviewId",
    reviewController.deleteRecord
);
/* ------------------------ REVIEW RECORDS UPDATE BY ID ----------------------- */
router.put(
    "/update-record/:reviewId",
    reviewController.updateRecord
);
module.exports = router;