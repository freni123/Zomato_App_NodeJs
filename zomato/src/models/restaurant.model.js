const mongoose = require("mongoose");

/* ---------------------------- RESTAURANT SCHEMA --------------------------- */
const restaurantSchema = new mongoose.Schema(
  {
    res_name: {
      type: String,
      trim: true,
    },
    res_desc: {
      type: String,
      trim: true,
    },
    res_location: {
      type: String,
      trim: true,
    },
    owner_name: {
      type: mongoose.Types.ObjectId,
      ref: "owner",
    },
    ratings: {
      type: String,
    },
    opening_time: {
      type: Date,
    },
    closeing_time: {
      type: Date,
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
const Restaurant = mongoose.model("restaurant", restaurantSchema);
module.exports = Restaurant;
