const { galleryService } = require("../services");
/* ----------------------------- CREATE FOOD GALLERY ----------------------------- */
const createGallery = async (req, res) => {
  try {
    const reqBody = req.body;

    if (req.file) {
      reqBody.food_gallery = req.file.filename;
    } else {
      throw new Error("Gallery image is required!");
    }
    const createdGallery = await galleryService.createGallery(reqBody);

    res.status(200).json({
      success: true,
      message: "Gallery create successfully!",
      data: createdGallery,
    });
  } catch (error) {
    res.status(error?.statusCode || 400).json({
      success: false,
      message:
        error?.message || "Something went wrong, please try again or later!",
    });
  }
};

/* -------------------------- GET FOOD GALLERY LIST ------------------------- */
const getGalleryList = async (req, res) => {
  try {
    const getGallery = await galleryService.getGalleryList(req, res);
    res.status(200).json({
      succcess: true,
      message: "gallery get successfully!",
      data: getGallery,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
/* ------------------------ FOOD GALLERY LIST DELETE ------------------------ */
const deleteGallery = async (req, res) => {
  try {
    const galleryId = req.params.galleryId;
    const galleryExis = await galleryService.getGalleryById(galleryId);
    if (!galleryExis) {
      throw new Error("Gallery not found!");
    }
    await galleryService.deleteGallery(galleryId);
    res.status(200).json({
      succcess: true,
      message: "Gallery delete successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
/* ------------------------ UPDATE FOOD GALLERY LIST ------------------------ */
const updateGallery = async (req, res) => {
  try {
    const galleryId = req.params.galleryId;
    const galleryExis = await galleryService.getGalleryById(galleryId);
    if (!galleryExis) {
      throw new Error("Gallery not found!");
    }
    await galleryService.updateGallery(galleryId.req.body);
    res.status(200).json({
      succcess: true,
      message: "Gallery update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = {
  createGallery,
  getGalleryList,
  deleteGallery,
  updateGallery,
};
