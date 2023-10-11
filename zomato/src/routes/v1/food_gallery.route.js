const express = require("express");
const { galleryController } = require("../../controller");
const { upload } = require("../../middlewares/upload");


const router = express.Router();
/* --------------------------- CREATE FOOD GALLERY -------------------------- */
router.post(
  "/create-gallery",
  upload.single("food_image"),
  galleryController.createGallery
);
/* -------------------------- GET FOOD GALLERY LIST ------------------------- */
router.get("/gallery-list", galleryController.getGalleryList);

/* --------------------------- DELETE FOOD GALLERY -------------------------- */
router.delete("/delete-gallery/:galleryId", galleryController.deleteGallery);

/* --------------------------- UPDATE FOOD GALLERY -------------------------- */
router.put("/update-gallery/:galleryId", galleryController.updateGallery);

module.exports = router;
