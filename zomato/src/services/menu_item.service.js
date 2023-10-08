const { menuItem } = require("../models");

/* ------------------------------- CREATE MENU-ITEM ------------------------------ */
const createmenuItem = async (reqBody) => {
  return menuItem.create(reqBody);
};
/* ------------------------------ GET MENU-ITEM LIST ----------------------------- */
const getmenuItemList = async (req, res) => {
  return menuItem.find();
};
/* ------------------------- GET MENU-ITEM RECORDS BY ID ------------------------- */
const getmenuItemById = async (menuId) => {
  return menuItem.findById(menuId);
};
/* --------------------------- MENU-ITEM RECORDS UPDATE BY ID --------------------------- */
const updateRecord = async (menuId, updateBody) => {
  return menuItem.findByIdAndUpdate(menuId, { $set: updateBody });
};
/* ------------------------------- DELETE MENU-ITEM ------------------------------ */
const deleteRecord = async (menuId) => {
  return menuItem.findByIdAndDelete(menuId);
};

module.exports = {
  createmenuItem,
  getmenuItemById,
  getmenuItemList,
  updateRecord,
  deleteRecord,
};
