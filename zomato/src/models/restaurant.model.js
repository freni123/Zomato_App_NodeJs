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
    city:{
      type:mongoose.Types.ObjectId,
      ref:"city",
    },
    ratings: {
      type: String,
    },
    opening_time: {
      type: Date,
      default:new Date().setHours(9,0,0),
    },
    closeing_time: {
      type: Date,
      default:new Date().setHours(10,0,0),
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
