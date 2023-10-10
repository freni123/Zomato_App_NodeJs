const { Order } = require("../models");

/* ------------------------------- CREATE ORDER ------------------------------ */
const createOrder = async (reqBody) => {
  return Order.create(reqBody);
};
/* ------------------------------ GET ORDER LIST ----------------------------- */
const getOrderList = async (req, res) => {
  return Order.find().populate("user").populate("restaurant").populate("items");
};
/* ------------------------- GET ORDER RECORDS BY ID ------------------------- */
const getOrderById = async (orderId) => {
  return Order.findById(orderId);
};
/* --------------------------- ORDER RECORDS UPDATE BY ID --------------------------- */
const updateRecord = async (orderId, updateBody) => {
  return Order.findByIdAndUpdate(orderId, { $set: updateBody });
};
/* ------------------------------- DELETE ORDER ------------------------------ */
const deleteRecord = async (orderId) => {
  return Order.findByIdAndDelete(orderId);
};

module.exports = {
  createOrder,
  getOrderList,
  getOrderById,
  updateRecord,
  deleteRecord,
};
