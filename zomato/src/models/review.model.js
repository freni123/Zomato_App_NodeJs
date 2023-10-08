const mongoose = require("mongoose");

/* ------------------------------- REVIEW MODEL SCHEMA ------------------------------ */
const reviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    restaurant: {
      type: mongoose.Types.ObjectId,
      ref: "restaurant",
    },
    comment: {
      type: String,
      trim: true,
    },
    date: {
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
const Review = mongoose.model("review", reviewSchema);
module.exports = Review;
