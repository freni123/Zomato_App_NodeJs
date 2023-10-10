const { Owner } = require("../models");

/* ------------------------------- CREATE OWNER ------------------------------ */
const createOwner = async (reqBody) => {
  return Owner.create(reqBody);
};
/* ------------------------------ GET OWNER LIST ----------------------------- */
const getOwnerList = async (req, res) => {
  return Owner.find().populate("restaurant_name","res_name");
};
/* ------------------------- GET OWNER RECORDS BY ID ------------------------- */
const getOwnerById = async (ownerId) => {
  return Owner.findById(ownerId);
};
/* --------------------------- OWNER RECORDS UPDATE BY ID --------------------------- */
const updateRecord = async (ownerId, updateBody) => {
  return Owner.findByIdAndUpdate(ownerId, { $set: updateBody });
};
/* ------------------------------- DELETE OWNER ------------------------------ */
const deleteRecord = async (ownerId) => {
  return Owner.findByIdAndDelete(ownerId);
};

module.exports = {
  createOwner,
  getOwnerList,
  getOwnerById,
  updateRecord,
  deleteRecord,
};
