const { Rating } = require("../models");

/* ------------------------------- CREATE RATING ------------------------------ */
const createRating = async (reqBody) => {
  return Rating.create(reqBody);
};
/* ------------------------------ GET RATING LIST ----------------------------- */
const getRatingList = async (req, res) => {
  return Rating.find().populate("restaurant");
};
/* ------------------------- GET RATING RECORDS BY ID ------------------------- */
const getRatingById = async (ratingId) => {
  return Rating.findById(ratingId);
};
/* --------------------------- RATING RECORDS UPDATE BY ID --------------------------- */
const updateRecord = async (ratingId, updateBody) => {
  return Rating.findByIdAndUpdate(ratingId, { $set: updateBody });
};
/* ------------------------------- DELETE RATING ------------------------------ */
const deleteRecord = async (ratingId) => {
  return Rating.findByIdAndDelete(ratingId);
};

module.exports = {
  createRating,
  getRatingList,
  getRatingById,
  updateRecord,
  deleteRecord,
};
