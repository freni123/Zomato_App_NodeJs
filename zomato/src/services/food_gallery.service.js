const { foodGallery } = require("../models");

/* --------------------------- CREATE FOOD GALLERY -------------------------- */
const createGallery = async (reqBody) => {
  return foodGallery.create(reqBody);
};
/* -------------------------- GET FOOD GALLERY LIST ------------------------- */
const getGalleryList = async (req, res) => {
  return foodGallery.find().populate("restaurant")
                           .populate("menuItem","item_name");
};
/* --------------------- GET FOOD GALLERY DETALIS BY ID --------------------- */
const getGalleryById = async (galleryId) => {
  return foodGallery.findById(galleryId);
};
/* ------------------------ DELETE FOOD GALLERY LIST ------------------------ */
const deleteGallery = async (galleryId) => {
  return foodGallery.findByIdAndDelete(galleryId);
};
/* --------------------------- UPDATE FOOD GALLERY -------------------------- */
const updateGalleryId = async (galleryId, updateBody) => {
  return foodGallery.findByIdAndUpdate(galleryId, {
    $set: updateBody,
  });
};
module.exports = {
  createGallery,
  getGalleryList,
  getGalleryById,
  deleteGallery,
  updateGalleryId,
};
