const { State } = require("../models");

/* ------------------------------- STATE USER ------------------------------ */
const createState = async (reqBody) => {
  return State.create(reqBody);
};
/* ------------------------------ GET STATE LIST ----------------------------- */
const getStateList = async (req, res) => {
  return State.find().populate("country");
};
/* ------------------------- GET STATE RECORDS BY ID ------------------------- */
const getStateById = async (stateId) => {
  return State.findById(stateId);
};
/* --------------------------- STATE RECORDS UPDATE BY ID --------------------------- */
const updateRecord = async (stateId, updateBody) => {
  return State.findByIdAndUpdate(stateId, { $set: updateBody });
};
/* ------------------------------- DELETE STATE ------------------------------ */
const deleteRecord = async (stateId) => {
  return State.findByIdAndDelete(stateId);
};

module.exports = {
    createState,
    getStateList,
    getStateById,
  updateRecord,
  deleteRecord,
};
