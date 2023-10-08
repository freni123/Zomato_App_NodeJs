const mongoose = require("mongoose");

/* ------------------------------- RATING SCHEMA ------------------------------ */
const ratingSchema = new mongoose.Schema(
  {
    restaurant: {
      type: mongoose.Types.ObjectId,
      ref: "restaurant",
    },
    averageRating:{
        type:Number,
    },
    totalRatings:{
        type:Number,
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
const Rating = mongoose.model("rating", ratingSchema);
module.exports = Rating;
