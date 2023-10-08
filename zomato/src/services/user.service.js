const { User } = require("../models");

/* ------------------------------- CREATE USER ------------------------------ */
const createUser = async (reqBody) => {
  return User.create(reqBody);
};
/* ------------------------------ GET USER LIST ----------------------------- */
const getUserList = async (req, res) => {
  return User.find();
};
/* ------------------------- GET USER RECORDS BY ID ------------------------- */
const getUserById = async (userId) => {
  return User.findById(userId);
};
/* --------------------------- USER RECORDS UPDATE BY ID --------------------------- */
const updateRecord = async (userId, updateBody) => {
  return User.findByIdAndUpdate(userId, { $set: updateBody });
};
/* ------------------------------- DELETE USER ------------------------------ */
const deleteRecord = async (userId) => {
  return User.findByIdAndDelete(userId);
};

module.exports = {
  createUser,
  getUserById,
  getUserList,
  updateRecord,
  deleteRecord,
};
