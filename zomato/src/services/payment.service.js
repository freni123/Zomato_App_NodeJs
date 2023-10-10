const { Payement } = require("../models");

/* ------------------------------- CREATE PAYMENT ------------------------------ */
const createPayement = async (reqBody) => {
  return Payement.create(reqBody);
};
/* ------------------------------ GET PAYMENT LIST ----------------------------- */
const getPayementList = async (req, res) => {
  return Payement.find().populate("user").populate("order");
};
/* ------------------------- GET PAYMENT RECORDS BY ID ------------------------- */
const getPayementById = async (payementId) => {
  return Payement.findById(payementId);
};
/* --------------------------- PAYMENT RECORDS UPDATE BY ID --------------------------- */
const updateRecord = async (payementId, updateBody) => {
  return Payement.findByIdAndUpdate(payementId, { $set: updateBody });
};
/* ------------------------------- DELETE PAYMENT ------------------------------ */
const deleteRecord = async (payementId) => {
  return Payement.findByIdAndDelete(payementId);
};

module.exports = {
  createPayement,
  getPayementList,
  getPayementById,
  updateRecord,
  deleteRecord,
};
