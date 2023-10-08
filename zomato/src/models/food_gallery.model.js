const mongoose = require("mongoose");

/* ------------------------------- FOOD GALLERY SCHEMA ------------------------------ */
const foodGallerySchema = new mongoose.Schema(
  {
    food_name: {
      type: String,
      trim: true,
    },
    food_img: {
      type: String,
    },
    food_desc: {
      type: String,
      trim: true,
    },
    restaurant: {
      type: mongoose.Types.ObjectId,
      ref: "restaurant",
    },
    menuItem: {
      type: mongoose.Types.ObjectId,
      ref: "menuItem",
    },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const foodGallery = mongoose.model("foodGallery", foodGallerySchema);
module.exports = foodGallery;
