const express = require("express");
const {restaurantController} = require("../../controller");
const {restaurantValidation} = require("../../validation");
const validate = require("../../middlewares/validate");

const router = express.Router();

/* ------------------------------- CREATE RESTAURANT ------------------------------ */
router.post(
    "/create-restaurant",
    validate(restaurantValidation.createRestaurant),
    restaurantController.createRestaurant
);
/* ------------------------------ GET RESTAURANT LIST ----------------------------- */
router.get(
    "/get-restaurantlist",
    restaurantController.getRestaurantList
);
/* ------------------------------- DELETE RESTAURANT ------------------------------ */
router.delete(
    "/delete-restaurant/:restaurantId",
    restaurantController.deleteRecord
);
/* ------------------------ RESTAURANT RECORDS UPDATE BY ID ----------------------- */
router.put(
    "/update-record/:restaurantId",
    restaurantController.updateRecord
);
module.exports = router;