const { Country } = require("../models");

/* ------------------------------- CREATE COUNTRY ------------------------------ */
const createCountry = async (reqBody) => {
  return Country.create(reqBody);
};
/* ------------------------------ GET COUNTRY LIST ----------------------------- */
const getCountryList = async (req, res) => {
  return Country.find();
};
/* ------------------------- GET COUNTRY RECORDS BY ID ------------------------- */
const getCountryById = async (countryId) => {
  return Country.findById(countryId);
};
/* --------------------------- COUNTRY RECORDS UPDATE BY ID --------------------------- */
const updateRecord = async (countryId, updateBody) => {
  return Country.findByIdAndUpdate(countryId, { $set: updateBody });
};
/* ------------------------------- DELETE COUNTRY ------------------------------ */
const deleteRecord = async (countryId) => {
  return Country.findByIdAndDelete(countryId);
};

module.exports = {
  createCountry,
  getCountryById,
  getCountryList,
  updateRecord,
  deleteRecord,
};
