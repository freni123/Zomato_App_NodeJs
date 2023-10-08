const { Restaurant } = require("../models");

/* ------------------------------- CREATE RESTAURANT ------------------------------ */
const createRestaurant = async (reqBody) => {
  return Restaurant.create(reqBody);
};
/* ------------------------------ GET RESTAURANT LIST ----------------------------- */
const getRestaurantList = async (req, res) => {
  return Restaurant.find();
};
/* ------------------------- GET RESTAURANT RECORDS BY ID ------------------------- */
const getRestaurantById = async (restaurantId) => {
  return Restaurant.findById(restaurantId);
};
/* --------------------------- RESTAURANT RECORDS UPDATE BY ID --------------------------- */
const updateRecord = async (restaurantId, updateBody) => {
  return Restaurant.findByIdAndUpdate(restaurantId, { $set: updateBody });
};
/* ------------------------------- DELETE RESTAURANT ------------------------------ */
const deleteRecord = async (restaurantId) => {
  return Restaurant.findByIdAndDelete(restaurantId);
};

module.exports = {
    createRestaurant,
  getRestaurantList,
  getRestaurantById,
  updateRecord,
  deleteRecord,
};
