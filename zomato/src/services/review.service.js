const { Review } = require("../models");

/* ------------------------------- CREATE REVIEW ------------------------------ */
const createReview = async (reqBody) => {
  return Review.create(reqBody);
};
/* ------------------------------ GET REVIEW LIST ----------------------------- */
const getReviewList = async (req, res) => {
  return Review.find();
};
/* ------------------------- GET REVIEW RECORDS BY ID ------------------------- */
const getReviewById = async (reviewId) => {
  return Review.findById(reviewId);
};
/* --------------------------- REVIEW RECORDS UPDATE BY ID --------------------------- */
const updateRecord = async (reviewId, updateBody) => {
  return Review.findByIdAndUpdate(reviewId, { $set: updateBody });
};
/* ------------------------------- DELETE REVIEW ------------------------------ */
const deleteRecord = async (reviewId) => {
  return Review.findByIdAndDelete(reviewId);
};

module.exports = {
  createReview,
  getReviewList,
  getReviewById,
  updateRecord,
  deleteRecord,
};
