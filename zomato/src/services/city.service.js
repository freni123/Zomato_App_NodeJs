const { City } = require("../models");

/* ------------------------------- CREATE CITY  ------------------------------ */
const createCity = async (reqBody) => {
  return City.create(reqBody);
};
/* ------------------------------ GET CITY LIST ----------------------------- */
const getCityList = async (req, res) => {
  return City.find().populate("state").populate("country");
};
/* ------------------------- GET CITY RECORDS BY ID ------------------------- */
const getCityById = async (cityId) => {
  return City.findById(cityId);
};
/* --------------------------- CITY RECORDS UPDATE BY ID --------------------------- */
const updateRecord = async (cityId, updateBody) => {
  return City.findByIdAndUpdate(cityId, { $set: updateBody });
};
/* ------------------------------- DELETE CITY  ------------------------------ */
const deleteRecord = async (cityId) => {
  return City.findByIdAndDelete(cityId);
};

module.exports = {
  createCity,
  getCityById,
  getCityList,
  updateRecord,
  deleteRecord,
};
