const { Admin } = require("../models");

/* ------------------------------- CREATE ADMIN ------------------------------ */
const createAdmin = async (reqBody) => {
  return Admin.create(reqBody);
};
/* ------------------------------ GET ADMIN LIST ----------------------------- */
const getAdminList = async (req, res) => {
  return Admin.find().populate("user");
};
/* ------------------------- GET ADMIN RECORDS BY ID ------------------------- */
const getAdminById = async (adminId) => {
  return Admin.findById(adminId);
};
/* --------------------------- ADMIN RECORDS UPDATE BY ID --------------------------- */
const updateRecord = async (adminId, updateBody) => {
  return Admin.findByIdAndUpdate(adminId, { $set: updateBody });
};
/* ------------------------------- DELETE ADMIN ------------------------------ */
const deleteRecord = async (adminId) => {
  return Admin.findByIdAndDelete(adminId);
};

module.exports = {
  createAdmin,
  getAdminById,
  getAdminList,
  updateRecord,
  deleteRecord,
};
