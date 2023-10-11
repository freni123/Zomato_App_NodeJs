const mongoose = require("mongoose");

/* ------------------------------- FOOD GALLERY SCHEMA ------------------------------ */
const foodGallerySchema = new mongoose.Schema(
  {
    food_name: {
      type: String,
      trim: true,
    },
    food_image: {
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
    toJSON: {
      transform: function (doc, data) {
        if (data?. food_image) {
          data. food_image= `${config.base_url}food_gallery/${data. food_image}`;
        }
      },
    },
  }
);
const foodGallery = mongoose.model("foodGallery", foodGallerySchema);
module.exports = foodGallery;
